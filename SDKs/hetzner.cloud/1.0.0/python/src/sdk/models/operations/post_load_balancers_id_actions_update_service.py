from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostLoadBalancersIDActionsUpdateServicePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckHTTP:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_codes' }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
class PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckLoadBalancerServiceHealthCheck:
    http: Optional[PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceRequestBodyHTTP:
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    cookie_lifetime: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_lifetime' }})
    cookie_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http' }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    
class PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceRequestBodyLoadBalancerService:
    destination_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_port' }})
    health_check: PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckLoadBalancerServiceHealthCheck = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http: Optional[PostLoadBalancersIDActionsUpdateServiceRequestBodyHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    listen_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    protocol: PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    proxyprotocol: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyprotocol' }})
    

@dataclass
class PostLoadBalancersIDActionsUpdateServiceRequest:
    path_params: PostLoadBalancersIDActionsUpdateServicePathParams = field(default=None)
    request: Optional[PostLoadBalancersIDActionsUpdateServiceRequestBodyLoadBalancerService] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionResponse:
    action: PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostLoadBalancersIDActionsUpdateServiceResponse:
    action_response: Optional[PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
