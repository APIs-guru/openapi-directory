from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostLoadBalancersIDActionsAddServicePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceLoadBalancerServiceHTTP:
    r"""PostLoadBalancersIDActionsAddServiceLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceLoadBalancerService:
    destination_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[PostLoadBalancersIDActionsAddServiceLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceActionResponseActionError:
    r"""PostLoadBalancersIDActionsAddServiceActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsAddServiceActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostLoadBalancersIDActionsAddServiceActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsAddServiceActionResponse:
    action: PostLoadBalancersIDActionsAddServiceActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostLoadBalancersIDActionsAddServiceRequest:
    path_params: PostLoadBalancersIDActionsAddServicePathParams = field()
    request: Optional[PostLoadBalancersIDActionsAddServiceLoadBalancerService] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoadBalancersIDActionsAddServiceResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostLoadBalancersIDActionsAddServiceActionResponse] = field(default=None)
    
