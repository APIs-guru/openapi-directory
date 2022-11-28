from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostServersIDActionsDetachFromNetworkPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostServersIDActionsDetachFromNetworkDetachFromNetworkRequest:
    network: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsDetachFromNetworkActionResponseActionError:
    r"""PostServersIDActionsDetachFromNetworkActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsDetachFromNetworkActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsDetachFromNetworkActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsDetachFromNetworkActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostServersIDActionsDetachFromNetworkActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsDetachFromNetworkActionResponse:
    action: PostServersIDActionsDetachFromNetworkActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostServersIDActionsDetachFromNetworkRequest:
    path_params: PostServersIDActionsDetachFromNetworkPathParams = field()
    request: Optional[PostServersIDActionsDetachFromNetworkDetachFromNetworkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostServersIDActionsDetachFromNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostServersIDActionsDetachFromNetworkActionResponse] = field(default=None)
    
