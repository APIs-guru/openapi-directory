from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RrSetRoutingPolicyHealthCheckTargets:
    r"""RrSetRoutingPolicyHealthCheckTargets
    HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
    """
    
    internal_load_balancers: Optional[List[RrSetRoutingPolicyLoadBalancerTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalLoadBalancers') }})
    
