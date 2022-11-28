from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostLoadBalancersIDActionsAddTargetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetAddTargetRequestIP:
    r"""PostLoadBalancersIDActionsAddTargetAddTargetRequestIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector:
    r"""PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector
    Configuration for label selector targets, required if type is `label_selector`
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetAddTargetRequestServer:
    r"""PostLoadBalancersIDActionsAddTargetAddTargetRequestServer
    Configuration for type Server, required if type is `server`
    """
    
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetAddTargetRequest:
    type: PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip: Optional[PostLoadBalancersIDActionsAddTargetAddTargetRequestIP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostLoadBalancersIDActionsAddTargetAddTargetRequestServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetActionResponseActionError:
    r"""PostLoadBalancersIDActionsAddTargetActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsAddTargetActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostLoadBalancersIDActionsAddTargetActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetActionResponse:
    action: PostLoadBalancersIDActionsAddTargetActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostLoadBalancersIDActionsAddTargetRequest:
    path_params: PostLoadBalancersIDActionsAddTargetPathParams = field()
    request: Optional[PostLoadBalancersIDActionsAddTargetAddTargetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoadBalancersIDActionsAddTargetResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostLoadBalancersIDActionsAddTargetActionResponse] = field(default=None)
    
