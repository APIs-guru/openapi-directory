from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostServersIDActionsEnableRescuePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostServersIDActionsEnableRescueRequestBodyTypeEnum(str, Enum):
    LINUX64 = "linux64"
    LINUX32 = "linux32"
    FREEBSD64 = "freebsd64"


@dataclass_json
@dataclass
class PostServersIDActionsEnableRescueRequestBody:
    ssh_keys: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_keys' }})
    type: Optional[PostServersIDActionsEnableRescueRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostServersIDActionsEnableRescueRequest:
    path_params: PostServersIDActionsEnableRescuePathParams = field(default=None)
    request: Optional[PostServersIDActionsEnableRescueRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsEnableRescue201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsEnableRescue201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsEnableRescue201ApplicationJSONAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServersIDActionsEnableRescue201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServersIDActionsEnableRescue201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsEnableRescue201ApplicationJSON:
    action: Optional[PostServersIDActionsEnableRescue201ApplicationJSONAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    root_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_password' }})
    

@dataclass
class PostServersIDActionsEnableRescueResponse:
    content_type: str = field(default=None)
    post_servers_id_actions_enable_rescue_201_application_json_object: Optional[PostServersIDActionsEnableRescue201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
