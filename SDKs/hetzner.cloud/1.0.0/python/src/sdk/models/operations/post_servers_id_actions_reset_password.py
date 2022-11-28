from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostServersIDActionsResetPasswordPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostServersIDActionsResetPassword201ApplicationJSONActionError:
    r"""PostServersIDActionsResetPassword201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsResetPassword201ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsResetPassword201ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsResetPassword201ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostServersIDActionsResetPassword201ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsResetPassword201ApplicationJSON:
    action: Optional[PostServersIDActionsResetPassword201ApplicationJSONAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    root_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_password') }})
    

@dataclass
class PostServersIDActionsResetPasswordRequest:
    path_params: PostServersIDActionsResetPasswordPathParams = field()
    

@dataclass
class PostServersIDActionsResetPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    post_servers_id_actions_reset_password_201_application_json_object: Optional[PostServersIDActionsResetPassword201ApplicationJSON] = field(default=None)
    
