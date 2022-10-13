from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rrsetroutingpolicywrrpolicywrrpolicyitem


@dataclass_json
@dataclass
class RrSetRoutingPolicyWrrPolicy:
    items: Optional[List[rrsetroutingpolicywrrpolicywrrpolicyitem.RrSetRoutingPolicyWrrPolicyWrrPolicyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
