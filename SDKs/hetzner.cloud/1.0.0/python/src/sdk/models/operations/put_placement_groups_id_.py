from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutPlacementGroupsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutPlacementGroupsIDUpdatePlacementGroupRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutPlacementGroupsIDRequest:
    path_params: PutPlacementGroupsIDPathParams = field(default=None)
    request: Optional[PutPlacementGroupsIDUpdatePlacementGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PutPlacementGroupsIDPlacementGroupResponsePlacementGroup:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutPlacementGroupsIDPlacementGroupResponse:
    placement_group: PutPlacementGroupsIDPlacementGroupResponsePlacementGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_group' }})
    

@dataclass
class PutPlacementGroupsIDResponse:
    content_type: str = field(default=None)
    placement_group_response: Optional[PutPlacementGroupsIDPlacementGroupResponse] = field(default=None)
    status_code: int = field(default=None)
    
