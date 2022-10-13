from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rrsetroutingpolicyhealthchecktargets


@dataclass_json
@dataclass
class RrSetRoutingPolicyWrrPolicyWrrPolicyItem:
    health_checked_targets: Optional[rrsetroutingpolicyhealthchecktargets.RrSetRoutingPolicyHealthCheckTargets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckedTargets' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    rrdatas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrdatas' }})
    signature_rrdatas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureRrdatas' }})
    weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
