from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class PostPlacementGroupsCreatePlacementGroupRequestTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: PostPlacementGroupsCreatePlacementGroupRequestTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostPlacementGroupsRequest:
    request: Optional[PostPlacementGroupsCreatePlacementGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponseNullableActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponseNullableAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostPlacementGroupsCreatePlacementGroupResponseNullableActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponse:
    action: Optional[PostPlacementGroupsCreatePlacementGroupResponseNullableAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    placement_group: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_group' }})
    

@dataclass
class PostPlacementGroupsResponse:
    content_type: str = field(default=None)
    create_placement_group_response: Optional[PostPlacementGroupsCreatePlacementGroupResponse] = field(default=None)
    status_code: int = field(default=None)
    
