from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placementgroup


@dataclass_json
@dataclass
class PlacementGroupsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    placement_groups: Optional[List[placementgroup.PlacementGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementGroups' }})
    
