from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetServersIDActionsActionIDPathParams:
    action_id: int = field(metadata={'path_param': { 'field_name': 'action_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetServersIDActionsActionIDActionResponseActionError:
    r"""GetServersIDActionsActionIDActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetServersIDActionsActionIDActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetServersIDActionsActionIDActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class GetServersIDActionsActionIDActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: GetServersIDActionsActionIDActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[GetServersIDActionsActionIDActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: GetServersIDActionsActionIDActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetServersIDActionsActionIDActionResponse:
    action: GetServersIDActionsActionIDActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class GetServersIDActionsActionIDRequest:
    path_params: GetServersIDActionsActionIDPathParams = field()
    

@dataclass
class GetServersIDActionsActionIDResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[GetServersIDActionsActionIDActionResponse] = field(default=None)
    
