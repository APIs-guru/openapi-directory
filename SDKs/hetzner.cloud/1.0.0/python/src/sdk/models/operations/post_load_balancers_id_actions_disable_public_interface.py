from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostLoadBalancersIDActionsDisablePublicInterfacePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionError:
    r"""PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsDisablePublicInterfaceActionResponse:
    action: PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostLoadBalancersIDActionsDisablePublicInterfaceRequest:
    path_params: PostLoadBalancersIDActionsDisablePublicInterfacePathParams = field()
    

@dataclass
class PostLoadBalancersIDActionsDisablePublicInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostLoadBalancersIDActionsDisablePublicInterfaceActionResponse] = field(default=None)
    
