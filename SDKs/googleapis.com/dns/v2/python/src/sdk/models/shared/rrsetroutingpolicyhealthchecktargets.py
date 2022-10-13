from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rrsetroutingpolicyloadbalancertarget


@dataclass_json
@dataclass
class RrSetRoutingPolicyHealthCheckTargets:
    internal_load_balancers: Optional[List[rrsetroutingpolicyloadbalancertarget.RrSetRoutingPolicyLoadBalancerTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalLoadBalancers' }})
    
