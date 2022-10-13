from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostLoadBalancersIDActionsAddTargetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetRequestBodyIP:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetRequestBodyLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetRequestBodyServer:
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTargetRequestBodyAddTargetRequest:
    ip: Optional[PostLoadBalancersIDActionsAddTargetRequestBodyIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    label_selector: Optional[PostLoadBalancersIDActionsAddTargetRequestBodyLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostLoadBalancersIDActionsAddTargetRequestBodyServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    

@dataclass
class PostLoadBalancersIDActionsAddTargetRequest:
    path_params: PostLoadBalancersIDActionsAddTargetPathParams = field(default=None)
    request: Optional[PostLoadBalancersIDActionsAddTargetRequestBodyAddTargetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionResponse:
    action: PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostLoadBalancersIDActionsAddTargetResponse:
    action_response: Optional[PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
