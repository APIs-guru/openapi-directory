from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RebuildNodeBalancerConfigPathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    
class RebuildNodeBalancerConfigRequestBodyAlgorithmEnum(str, Enum):
    ROUNDROBIN = "roundrobin"
    LEASTCONN = "leastconn"
    SOURCE = "source"

class RebuildNodeBalancerConfigRequestBodyCheckEnum(str, Enum):
    NONE = "none"
    CONNECTION = "connection"
    HTTP = "http"
    HTTP_BODY = "http_body"

class RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum(str, Enum):
    RECOMMENDED = "recommended"
    LEGACY = "legacy"

class RebuildNodeBalancerConfigRequestBodyProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"

class RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum(str, Enum):
    NONE = "none"
    V1 = "v1"
    V2 = "v2"

class RebuildNodeBalancerConfigRequestBodyStickinessEnum(str, Enum):
    NONE = "none"
    TABLE = "table"
    HTTP_COOKIE = "http_cookie"


@dataclass_json
@dataclass
class RebuildNodeBalancerConfigRequestBodyInput:
    algorithm: Optional[RebuildNodeBalancerConfigRequestBodyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    check: Optional[RebuildNodeBalancerConfigRequestBodyCheckEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check') }})
    check_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_attempts') }})
    check_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_body') }})
    check_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_interval') }})
    check_passive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_passive') }})
    check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_path') }})
    check_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_timeout') }})
    cipher_suite: Optional[RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cipher_suite') }})
    nodes: Optional[List[shared.NodeBalancerNodeInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[RebuildNodeBalancerConfigRequestBodyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxy_protocol: Optional[RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_protocol') }})
    ssl_cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_cert') }})
    ssl_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_key') }})
    stickiness: Optional[RebuildNodeBalancerConfigRequestBodyStickinessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stickiness') }})
    

@dataclass
class RebuildNodeBalancerConfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class RebuildNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class RebuildNodeBalancerConfigRequest:
    path_params: RebuildNodeBalancerConfigPathParams = field()
    request: RebuildNodeBalancerConfigRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: RebuildNodeBalancerConfigSecurity = field()
    

@dataclass
class RebuildNodeBalancerConfigResponse:
    content_type: str = field()
    status_code: int = field()
    node_balancer: Optional[shared.NodeBalancer] = field(default=None)
    rebuild_node_balancer_config_default_application_json_object: Optional[RebuildNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
