from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodePoolAutoscalingLocationPolicyEnum(str, Enum):
    LOCATION_POLICY_UNSPECIFIED = "LOCATION_POLICY_UNSPECIFIED"
    BALANCED = "BALANCED"
    ANY = "ANY"


@dataclass_json
@dataclass
class NodePoolAutoscaling:
    r"""NodePoolAutoscaling
    NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
    """
    
    autoprovisioned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoprovisioned') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    location_policy: Optional[NodePoolAutoscalingLocationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationPolicy') }})
    max_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNodeCount') }})
    min_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNodeCount') }})
    total_max_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalMaxNodeCount') }})
    total_min_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalMinNodeCount') }})
    
