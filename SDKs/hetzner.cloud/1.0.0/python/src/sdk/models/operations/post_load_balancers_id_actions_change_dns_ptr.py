from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostLoadBalancersIDActionsChangeDNSPtrPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeDNSPtrChangeLoadbalancerDNSPtrRequest:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError:
    r"""PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeDNSPtrActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsChangeDNSPtrActionResponse:
    action: PostLoadBalancersIDActionsChangeDNSPtrActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostLoadBalancersIDActionsChangeDNSPtrRequest:
    path_params: PostLoadBalancersIDActionsChangeDNSPtrPathParams = field()
    request: Optional[PostLoadBalancersIDActionsChangeDNSPtrChangeLoadbalancerDNSPtrRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoadBalancersIDActionsChangeDNSPtrResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostLoadBalancersIDActionsChangeDNSPtrActionResponse] = field(default=None)
    
