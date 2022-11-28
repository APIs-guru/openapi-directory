from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodeBalancerConfigAlgorithmEnum(str, Enum):
    ROUNDROBIN = "roundrobin"
    LEASTCONN = "leastconn"
    SOURCE = "source"

class NodeBalancerConfigCheckEnum(str, Enum):
    NONE = "none"
    CONNECTION = "connection"
    HTTP = "http"
    HTTP_BODY = "http_body"

class NodeBalancerConfigCipherSuiteEnum(str, Enum):
    RECOMMENDED = "recommended"
    LEGACY = "legacy"


@dataclass_json
@dataclass
class NodeBalancerConfigNodesStatus:
    r"""NodeBalancerConfigNodesStatus
    A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
    
    """
    
    down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('down') }})
    up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('up') }})
    
class NodeBalancerConfigProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"

class NodeBalancerConfigProxyProtocolEnum(str, Enum):
    NONE = "none"
    V1 = "v1"
    V2 = "v2"

class NodeBalancerConfigStickinessEnum(str, Enum):
    NONE = "none"
    TABLE = "table"
    HTTP_COOKIE = "http_cookie"


@dataclass_json
@dataclass
class NodeBalancerConfigInput:
    r"""NodeBalancerConfigInput
    A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
    
    NodeBalancer configs have a list of backends, called \"nodes,\" that they forward requests between based on their configuration.
    
    """
    
    algorithm: Optional[NodeBalancerConfigAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    check: Optional[NodeBalancerConfigCheckEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check') }})
    check_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_attempts') }})
    check_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_body') }})
    check_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_interval') }})
    check_passive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_passive') }})
    check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_path') }})
    check_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_timeout') }})
    cipher_suite: Optional[NodeBalancerConfigCipherSuiteEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cipher_suite') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[NodeBalancerConfigProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxy_protocol: Optional[NodeBalancerConfigProxyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_protocol') }})
    ssl_cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_cert') }})
    ssl_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_key') }})
    stickiness: Optional[NodeBalancerConfigStickinessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stickiness') }})
    

@dataclass_json
@dataclass
class NodeBalancerConfig:
    r"""NodeBalancerConfig
    A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
    
    NodeBalancer configs have a list of backends, called \"nodes,\" that they forward requests between based on their configuration.
    
    """
    
    algorithm: Optional[NodeBalancerConfigAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    check: Optional[NodeBalancerConfigCheckEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check') }})
    check_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_attempts') }})
    check_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_body') }})
    check_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_interval') }})
    check_passive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_passive') }})
    check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_path') }})
    check_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_timeout') }})
    cipher_suite: Optional[NodeBalancerConfigCipherSuiteEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cipher_suite') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    nodebalancer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodebalancer_id') }})
    nodes_status: Optional[NodeBalancerConfigNodesStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes_status') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[NodeBalancerConfigProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxy_protocol: Optional[NodeBalancerConfigProxyProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_protocol') }})
    ssl_cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_cert') }})
    ssl_commonname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_commonname') }})
    ssl_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_fingerprint') }})
    ssl_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_key') }})
    stickiness: Optional[NodeBalancerConfigStickinessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stickiness') }})
    
