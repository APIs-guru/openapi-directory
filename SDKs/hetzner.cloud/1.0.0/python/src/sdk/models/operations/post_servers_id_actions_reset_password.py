from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostServersIDActionsResetPasswordPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostServersIDActionsResetPasswordRequest:
    path_params: PostServersIDActionsResetPasswordPathParams = field(default=None)
    

@dataclass_json
@dataclass
class PostServersIDActionsResetPassword201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsResetPassword201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsResetPassword201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServersIDActionsResetPassword201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServersIDActionsResetPassword201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsResetPassword201ApplicationJSON:
    action: Optional[PostServersIDActionsResetPassword201ApplicationJSONActionAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    root_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_password' }})
    

@dataclass
class PostServersIDActionsResetPasswordResponse:
    content_type: str = field(default=None)
    post_servers_id_actions_reset_password_201_application_json_object: Optional[PostServersIDActionsResetPassword201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
