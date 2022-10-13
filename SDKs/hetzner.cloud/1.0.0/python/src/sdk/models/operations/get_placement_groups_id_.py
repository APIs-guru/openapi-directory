from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetPlacementGroupsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlacementGroupsIDRequest:
    path_params: GetPlacementGroupsIDPathParams = field(default=None)
    
class GetPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class GetPlacementGroupsID200ApplicationJSONPlacementGroupPlacementGroup:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: GetPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetPlacementGroupsID200ApplicationJSONPlacementGroupResponse:
    placement_group: GetPlacementGroupsID200ApplicationJSONPlacementGroupPlacementGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_group' }})
    

@dataclass
class GetPlacementGroupsIDResponse:
    content_type: str = field(default=None)
    placement_group_response: Optional[GetPlacementGroupsID200ApplicationJSONPlacementGroupResponse] = field(default=None)
    status_code: int = field(default=None)
    
