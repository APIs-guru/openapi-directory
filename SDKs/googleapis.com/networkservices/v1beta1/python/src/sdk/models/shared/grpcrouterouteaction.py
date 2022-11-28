from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcRouteRouteAction:
    r"""GrpcRouteRouteAction
    Specifies how to route matched traffic.
    """
    
    destinations: Optional[List[GrpcRouteDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    fault_injection_policy: Optional[GrpcRouteFaultInjectionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faultInjectionPolicy') }})
    retry_policy: Optional[GrpcRouteRetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
