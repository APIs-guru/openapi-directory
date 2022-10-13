from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import floodlightactivitygroup


@dataclass_json
@dataclass
class FloodlightActivityGroupsListResponse:
    floodlight_activity_groups: Optional[List[floodlightactivitygroup.FloodlightActivityGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityGroups' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
