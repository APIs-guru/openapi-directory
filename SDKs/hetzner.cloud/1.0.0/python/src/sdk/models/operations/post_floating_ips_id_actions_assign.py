from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostFloatingIpsIDActionsAssignPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFloatingIpsIDActionsAssignAssignFloatingIPRequest:
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass_json
@dataclass
class PostFloatingIpsIDActionsAssignActionResponseActionError:
    r"""PostFloatingIpsIDActionsAssignActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostFloatingIpsIDActionsAssignActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFloatingIpsIDActionsAssignActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFloatingIpsIDActionsAssignActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFloatingIpsIDActionsAssignActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostFloatingIpsIDActionsAssignActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFloatingIpsIDActionsAssignActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostFloatingIpsIDActionsAssignActionResponse:
    action: PostFloatingIpsIDActionsAssignActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostFloatingIpsIDActionsAssignRequest:
    path_params: PostFloatingIpsIDActionsAssignPathParams = field()
    request: Optional[PostFloatingIpsIDActionsAssignAssignFloatingIPRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostFloatingIpsIDActionsAssignResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostFloatingIpsIDActionsAssignActionResponse] = field(default=None)
    
