from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum(str, Enum):
    UNDEFINED = "undefined"
    TCP = "tcp"
    UDP = "udp"

class RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum(str, Enum):
    NONE = "none"
    REGIONAL_L4ILB = "regionalL4ilb"


@dataclass_json
@dataclass
class RrSetRoutingPolicyLoadBalancerTarget:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    ip_protocol: Optional[RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipProtocol' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    load_balancer_type: Optional[RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerType' }})
    network_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUrl' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
