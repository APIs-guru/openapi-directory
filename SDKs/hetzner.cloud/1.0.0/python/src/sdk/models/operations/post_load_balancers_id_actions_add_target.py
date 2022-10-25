from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostLoadBalancersIDActionsAddTargetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetAddTargetRequestIP:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetAddTargetRequestServer:
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetAddTargetRequest:
    ip: Optional[PostLoadBalancersIDActionsAddTargetAddTargetRequestIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    label_selector: Optional[PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostLoadBalancersIDActionsAddTargetAddTargetRequestServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    

@dataclass
class PostLoadBalancersIDActionsAddTargetRequest:
    path_params: PostLoadBalancersIDActionsAddTargetPathParams = field(default=None)
    request: Optional[PostLoadBalancersIDActionsAddTargetAddTargetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetActionResponseActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetActionResponseActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetActionResponseAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostLoadBalancersIDActionsAddTargetActionResponseActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostLoadBalancersIDActionsAddTargetActionResponseActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetActionResponse:
    action: PostLoadBalancersIDActionsAddTargetActionResponseAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostLoadBalancersIDActionsAddTargetResponse:
    action_response: Optional[PostLoadBalancersIDActionsAddTargetActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
