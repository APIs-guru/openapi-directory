from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directorysite


@dataclass_json
@dataclass
class DirectorySitesListResponse:
    directory_sites: Optional[List[directorysite.DirectorySite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directorySites' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
