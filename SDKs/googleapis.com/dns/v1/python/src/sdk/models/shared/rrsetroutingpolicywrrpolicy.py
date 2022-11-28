from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RrSetRoutingPolicyWrrPolicy:
    r"""RrSetRoutingPolicyWrrPolicy
    Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
    """
    
    items: Optional[List[RrSetRoutingPolicyWrrPolicyWrrPolicyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
