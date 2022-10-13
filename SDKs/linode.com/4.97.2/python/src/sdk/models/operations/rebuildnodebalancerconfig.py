from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RebuildNodeBalancerConfigPathParams:
    config_id: int = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    
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


@dataclass_json
@dataclass
class RebuildNodeBalancerConfigRequestBodyNodesStatus:
    down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'down' }})
    up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'up' }})
    
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
class RebuildNodeBalancerConfigRequestBody:
    algorithm: Optional[RebuildNodeBalancerConfigRequestBodyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    check: Optional[RebuildNodeBalancerConfigRequestBodyCheckEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check' }})
    check_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_attempts' }})
    check_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_body' }})
    check_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_interval' }})
    check_passive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_passive' }})
    check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_path' }})
    check_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_timeout' }})
    cipher_suite: Optional[RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cipher_suite' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    nodebalancer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodebalancer_id' }})
    nodes: Optional[List[shared.NodeBalancerNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    nodes_status: Optional[RebuildNodeBalancerConfigRequestBodyNodesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes_status' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[RebuildNodeBalancerConfigRequestBodyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    proxy_protocol: Optional[RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxy_protocol' }})
    ssl_cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl_cert' }})
    ssl_commonname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl_commonname' }})
    ssl_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl_fingerprint' }})
    ssl_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl_key' }})
    stickiness: Optional[RebuildNodeBalancerConfigRequestBodyStickinessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stickiness' }})
    

@dataclass
class RebuildNodeBalancerConfigSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RebuildNodeBalancerConfigSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RebuildNodeBalancerConfigSecurity:
    option1: Optional[RebuildNodeBalancerConfigSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[RebuildNodeBalancerConfigSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class RebuildNodeBalancerConfigRequest:
    path_params: RebuildNodeBalancerConfigPathParams = field(default=None)
    request: RebuildNodeBalancerConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RebuildNodeBalancerConfigSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RebuildNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class RebuildNodeBalancerConfigResponse:
    content_type: str = field(default=None)
    node_balancer: Optional[shared.NodeBalancer] = field(default=None)
    status_code: int = field(default=None)
    rebuild_node_balancer_config_default_application_json_object: Optional[RebuildNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
