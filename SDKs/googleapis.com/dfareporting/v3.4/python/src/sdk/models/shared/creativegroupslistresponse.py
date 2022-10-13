from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import creativegroup


@dataclass_json
@dataclass
class CreativeGroupsListResponse:
    creative_groups: Optional[List[creativegroup.CreativeGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeGroups' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
