from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grpcroutedestination
from . import grpcroutefaultinjectionpolicy
from . import grpcrouteretrypolicy


@dataclass_json
@dataclass
class GrpcRouteRouteAction:
    destinations: Optional[List[grpcroutedestination.GrpcRouteDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    fault_injection_policy: Optional[grpcroutefaultinjectionpolicy.GrpcRouteFaultInjectionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faultInjectionPolicy' }})
    retry_policy: Optional[grpcrouteretrypolicy.GrpcRouteRetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryPolicy' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
