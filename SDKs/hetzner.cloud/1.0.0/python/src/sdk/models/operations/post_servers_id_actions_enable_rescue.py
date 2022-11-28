from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostServersIDActionsEnableRescuePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostServersIDActionsEnableRescueRequestBodyTypeEnum(str, Enum):
    LINUX64 = "linux64"
    LINUX32 = "linux32"
    FREEBSD64 = "freebsd64"


@dataclass_json
@dataclass
class PostServersIDActionsEnableRescueRequestBody:
    ssh_keys: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_keys') }})
    type: Optional[PostServersIDActionsEnableRescueRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsEnableRescue201ApplicationJSONActionError:
    r"""PostServersIDActionsEnableRescue201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsEnableRescue201ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsEnableRescue201ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsEnableRescue201ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostServersIDActionsEnableRescue201ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsEnableRescue201ApplicationJSON:
    action: Optional[PostServersIDActionsEnableRescue201ApplicationJSONAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    root_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_password') }})
    

@dataclass
class PostServersIDActionsEnableRescueRequest:
    path_params: PostServersIDActionsEnableRescuePathParams = field()
    request: Optional[PostServersIDActionsEnableRescueRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostServersIDActionsEnableRescueResponse:
    content_type: str = field()
    status_code: int = field()
    post_servers_id_actions_enable_rescue_201_application_json_object: Optional[PostServersIDActionsEnableRescue201ApplicationJSON] = field(default=None)
    
