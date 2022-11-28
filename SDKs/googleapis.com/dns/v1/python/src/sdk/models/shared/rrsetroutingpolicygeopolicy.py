from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RrSetRoutingPolicyGeoPolicy:
    r"""RrSetRoutingPolicyGeoPolicy
    Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
    """
    
    enable_fencing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableFencing') }})
    items: Optional[List[RrSetRoutingPolicyGeoPolicyGeoPolicyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
