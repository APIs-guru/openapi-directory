from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostServersIDActionsRequestConsolePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostServersIDActionsRequestConsoleRequest:
    path_params: PostServersIDActionsRequestConsolePathParams = field(default=None)
    

@dataclass_json
@dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServersIDActionsRequestConsole201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServersIDActionsRequestConsole201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRequestConsole201ApplicationJSON:
    action: PostServersIDActionsRequestConsole201ApplicationJSONAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    wss_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wss_url' }})
    

@dataclass
class PostServersIDActionsRequestConsoleResponse:
    content_type: str = field(default=None)
    post_servers_id_actions_request_console_201_application_json_object: Optional[PostServersIDActionsRequestConsole201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
