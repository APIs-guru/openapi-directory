from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RrSetRoutingPolicyGeoPolicyGeoPolicyItem:
    r"""RrSetRoutingPolicyGeoPolicyGeoPolicyItem
    ResourceRecordSet data for one geo location.
    """
    
    health_checked_targets: Optional[RrSetRoutingPolicyHealthCheckTargets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckedTargets') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    rrdatas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrdatas') }})
    signature_rrdatas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureRrdatas') }})
    
