from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostLoadBalancersIDActionsUpdateServicePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_codes' }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck:
    http: Optional[PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceHTTP:
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    cookie_lifetime: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_lifetime' }})
    cookie_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http' }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerService:
    destination_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_port' }})
    health_check: PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http: Optional[PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    listen_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    protocol: PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    proxyprotocol: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyprotocol' }})
    

@dataclass
class PostLoadBalancersIDActionsUpdateServiceRequest:
    path_params: PostLoadBalancersIDActionsUpdateServicePathParams = field(default=None)
    request: Optional[PostLoadBalancersIDActionsUpdateServiceLoadBalancerService] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceActionResponseActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceActionResponseActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceActionResponseAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostLoadBalancersIDActionsUpdateServiceActionResponseActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostLoadBalancersIDActionsUpdateServiceActionResponseActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceActionResponse:
    action: PostLoadBalancersIDActionsUpdateServiceActionResponseAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostLoadBalancersIDActionsUpdateServiceResponse:
    action_response: Optional[PostLoadBalancersIDActionsUpdateServiceActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
