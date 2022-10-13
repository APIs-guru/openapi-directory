from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import version


@dataclass_json
@dataclass
class ListAvailableVersionsResponse:
    available_versions: Optional[List[version.Version]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableVersions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
