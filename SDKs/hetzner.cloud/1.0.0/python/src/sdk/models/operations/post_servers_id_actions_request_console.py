from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostServersIDActionsRequestConsolePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONActionError:
    r"""PostServersIDActionsRequestConsole201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsRequestConsole201ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostServersIDActionsRequestConsole201ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsRequestConsole201ApplicationJSON:
    action: PostServersIDActionsRequestConsole201ApplicationJSONAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    wss_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wss_url') }})
    

@dataclass
class PostServersIDActionsRequestConsoleRequest:
    path_params: PostServersIDActionsRequestConsolePathParams = field()
    

@dataclass
class PostServersIDActionsRequestConsoleResponse:
    content_type: str = field()
    status_code: int = field()
    post_servers_id_actions_request_console_201_application_json_object: Optional[PostServersIDActionsRequestConsole201ApplicationJSON] = field(default=None)
    
