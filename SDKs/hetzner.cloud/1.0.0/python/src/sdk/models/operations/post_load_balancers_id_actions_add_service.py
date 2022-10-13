from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostLoadBalancersIDActionsAddServicePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckHTTP:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_codes' }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
class PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckLoadBalancerServiceHealthCheck:
    http: Optional[PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceRequestBodyHTTP:
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    cookie_lifetime: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_lifetime' }})
    cookie_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http' }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    
class PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceRequestBodyLoadBalancerService:
    destination_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_port' }})
    health_check: PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckLoadBalancerServiceHealthCheck = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http: Optional[PostLoadBalancersIDActionsAddServiceRequestBodyHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    listen_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    protocol: PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    proxyprotocol: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyprotocol' }})
    

@dataclass
class PostLoadBalancersIDActionsAddServiceRequest:
    path_params: PostLoadBalancersIDActionsAddServicePathParams = field(default=None)
    request: Optional[PostLoadBalancersIDActionsAddServiceRequestBodyLoadBalancerService] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddService201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddService201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddService201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostLoadBalancersIDActionsAddService201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostLoadBalancersIDActionsAddService201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddService201ApplicationJSONActionResponse:
    action: PostLoadBalancersIDActionsAddService201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostLoadBalancersIDActionsAddServiceResponse:
    action_response: Optional[PostLoadBalancersIDActionsAddService201ApplicationJSONActionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
