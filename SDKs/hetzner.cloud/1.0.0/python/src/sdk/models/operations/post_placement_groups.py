from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class PostPlacementGroupsRequestBodyTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostPlacementGroupsRequestBodyCreatePlacementGroupRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: PostPlacementGroupsRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostPlacementGroupsRequest:
    request: Optional[PostPlacementGroupsRequestBodyCreatePlacementGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPlacementGroups201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostPlacementGroups201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostPlacementGroups201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostPlacementGroups201ApplicationJSONActionNullableAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostPlacementGroups201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostPlacementGroups201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostPlacementGroups201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class PostPlacementGroups201ApplicationJSONPlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostPlacementGroups201ApplicationJSONPlacementGroupPlacementGroup:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: PostPlacementGroups201ApplicationJSONPlacementGroupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostPlacementGroups201ApplicationJSONCreatePlacementGroupResponse:
    action: Optional[PostPlacementGroups201ApplicationJSONActionNullableAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    placement_group: PostPlacementGroups201ApplicationJSONPlacementGroupPlacementGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_group' }})
    

@dataclass
class PostPlacementGroupsResponse:
    content_type: str = field(default=None)
    create_placement_group_response: Optional[PostPlacementGroups201ApplicationJSONCreatePlacementGroupResponse] = field(default=None)
    status_code: int = field(default=None)
    
