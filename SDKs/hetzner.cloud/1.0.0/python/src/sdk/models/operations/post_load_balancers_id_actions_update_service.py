from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostLoadBalancersIDActionsUpdateServicePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceHTTP:
    r"""PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceLoadBalancerService:
    destination_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceActionResponseActionError:
    r"""PostLoadBalancersIDActionsUpdateServiceActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsUpdateServiceActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostLoadBalancersIDActionsUpdateServiceActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersIDActionsUpdateServiceActionResponse:
    action: PostLoadBalancersIDActionsUpdateServiceActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostLoadBalancersIDActionsUpdateServiceRequest:
    path_params: PostLoadBalancersIDActionsUpdateServicePathParams = field()
    request: Optional[PostLoadBalancersIDActionsUpdateServiceLoadBalancerService] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoadBalancersIDActionsUpdateServiceResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostLoadBalancersIDActionsUpdateServiceActionResponse] = field(default=None)
    
