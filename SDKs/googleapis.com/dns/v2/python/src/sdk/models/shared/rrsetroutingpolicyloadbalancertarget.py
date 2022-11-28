from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum(str, Enum):
    UNDEFINED = "UNDEFINED"
    TCP = "TCP"
    UDP = "UDP"

class RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum(str, Enum):
    NONE = "NONE"
    REGIONAL_L4_ILB = "REGIONAL_L4ILB"


@dataclass_json
@dataclass
class RrSetRoutingPolicyLoadBalancerTarget:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    ip_protocol: Optional[RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipProtocol') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    load_balancer_type: Optional[RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerType') }})
    network_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUrl') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
