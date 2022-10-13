from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autoprovisioningnodepooldefaults
from . import resourcelimit

class ClusterAutoscalingAutoscalingProfileEnum(str, Enum):
    PROFILE_UNSPECIFIED = "PROFILE_UNSPECIFIED"
    OPTIMIZE_UTILIZATION = "OPTIMIZE_UTILIZATION"
    BALANCED = "BALANCED"


@dataclass_json
@dataclass
class ClusterAutoscaling:
    autoprovisioning_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoprovisioningLocations' }})
    autoprovisioning_node_pool_defaults: Optional[autoprovisioningnodepooldefaults.AutoprovisioningNodePoolDefaults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoprovisioningNodePoolDefaults' }})
    autoscaling_profile: Optional[ClusterAutoscalingAutoscalingProfileEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscalingProfile' }})
    enable_node_autoprovisioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableNodeAutoprovisioning' }})
    resource_limits: Optional[List[resourcelimit.ResourceLimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceLimits' }})
    
