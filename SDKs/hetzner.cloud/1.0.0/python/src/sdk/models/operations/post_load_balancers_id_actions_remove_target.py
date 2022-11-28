from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostLoadBalancersIDActionsRemoveTargetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestIP:
    r"""PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector:
    r"""PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector
    Configuration for label selector targets, required if type is `label_selector`
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer:
    r"""PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer
    Configuration for type Server, required if type is `server`
    """
    
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequest:
    type: PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip: Optional[PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestIP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetActionResponseActionError:
    r"""PostLoadBalancersIDActionsRemoveTargetActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsRemoveTargetActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostLoadBalancersIDActionsRemoveTargetActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetActionResponse:
    action: PostLoadBalancersIDActionsRemoveTargetActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostLoadBalancersIDActionsRemoveTargetRequest:
    path_params: PostLoadBalancersIDActionsRemoveTargetPathParams = field()
    request: Optional[PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoadBalancersIDActionsRemoveTargetResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostLoadBalancersIDActionsRemoveTargetActionResponse] = field(default=None)
    
