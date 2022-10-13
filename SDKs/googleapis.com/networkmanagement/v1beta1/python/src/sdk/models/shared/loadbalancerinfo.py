from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import loadbalancerbackend

class LoadBalancerInfoBackendTypeEnum(str, Enum):
    BACKEND_TYPE_UNSPECIFIED = "BACKEND_TYPE_UNSPECIFIED"
    BACKEND_SERVICE = "BACKEND_SERVICE"
    TARGET_POOL = "TARGET_POOL"
    TARGET_INSTANCE = "TARGET_INSTANCE"

class LoadBalancerInfoLoadBalancerTypeEnum(str, Enum):
    LOAD_BALANCER_TYPE_UNSPECIFIED = "LOAD_BALANCER_TYPE_UNSPECIFIED"
    INTERNAL_TCP_UDP = "INTERNAL_TCP_UDP"
    NETWORK_TCP_UDP = "NETWORK_TCP_UDP"
    HTTP_PROXY = "HTTP_PROXY"
    TCP_PROXY = "TCP_PROXY"
    SSL_PROXY = "SSL_PROXY"


@dataclass_json
@dataclass
class LoadBalancerInfo:
    backend_type: Optional[LoadBalancerInfoBackendTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendType' }})
    backend_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendUri' }})
    backends: Optional[List[loadbalancerbackend.LoadBalancerBackend]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backends' }})
    health_check_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckUri' }})
    load_balancer_type: Optional[LoadBalancerInfoLoadBalancerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerType' }})
    
