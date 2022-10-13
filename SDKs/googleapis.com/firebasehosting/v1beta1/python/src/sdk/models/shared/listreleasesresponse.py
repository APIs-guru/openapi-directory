from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import release


@dataclass_json
@dataclass
class ListReleasesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    releases: Optional[List[release.Release]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releases' }})
    
