from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NodePoolAutoscalingLocationPolicyEnum(str, Enum):
    LOCATION_POLICY_UNSPECIFIED = "LOCATION_POLICY_UNSPECIFIED"
    BALANCED = "BALANCED"
    ANY = "ANY"


@dataclass_json
@dataclass
class NodePoolAutoscaling:
    autoprovisioned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoprovisioned' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    location_policy: Optional[NodePoolAutoscalingLocationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationPolicy' }})
    max_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNodeCount' }})
    min_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minNodeCount' }})
    total_max_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMaxNodeCount' }})
    total_min_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMinNodeCount' }})
    
