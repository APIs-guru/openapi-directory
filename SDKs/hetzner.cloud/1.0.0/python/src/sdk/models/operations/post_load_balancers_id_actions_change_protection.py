from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostLoadBalancersIDActionsChangeProtectionPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeProtectionRequestBody:
    delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeProtectionActionResponseActionError:
    r"""PostLoadBalancersIDActionsChangeProtectionActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeProtectionActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeProtectionActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsChangeProtectionActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostLoadBalancersIDActionsChangeProtectionActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeProtectionActionResponse:
    action: PostLoadBalancersIDActionsChangeProtectionActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostLoadBalancersIDActionsChangeProtectionRequest:
    path_params: PostLoadBalancersIDActionsChangeProtectionPathParams = field()
    request: Optional[PostLoadBalancersIDActionsChangeProtectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoadBalancersIDActionsChangeProtectionResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostLoadBalancersIDActionsChangeProtectionActionResponse] = field(default=None)
    
