from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RrSetRoutingPolicyWrrPolicyWrrPolicyItem:
    r"""RrSetRoutingPolicyWrrPolicyWrrPolicyItem
    A routing block which contains the routing information for one WRR item.
    """
    
    health_checked_targets: Optional[RrSetRoutingPolicyHealthCheckTargets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckedTargets') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    rrdatas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrdatas') }})
    signature_rrdatas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureRrdatas') }})
    weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
