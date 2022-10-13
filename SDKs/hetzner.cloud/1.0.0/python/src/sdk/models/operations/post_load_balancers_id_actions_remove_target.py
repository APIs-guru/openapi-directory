from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostLoadBalancersIDActionsRemoveTargetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetRequestBodyIP:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetRequestBodyLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetRequestBodyServer:
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTargetRequestBodyRemoveTargetRequest:
    ip: Optional[PostLoadBalancersIDActionsRemoveTargetRequestBodyIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    label_selector: Optional[PostLoadBalancersIDActionsRemoveTargetRequestBodyLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostLoadBalancersIDActionsRemoveTargetRequestBodyServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostLoadBalancersIDActionsRemoveTargetRequest:
    path_params: PostLoadBalancersIDActionsRemoveTargetPathParams = field(default=None)
    request: Optional[PostLoadBalancersIDActionsRemoveTargetRequestBodyRemoveTargetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionResponse:
    action: PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostLoadBalancersIDActionsRemoveTargetResponse:
    action_response: Optional[PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
