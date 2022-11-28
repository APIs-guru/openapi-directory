from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ClusterAutoscalingAutoscalingProfileEnum(str, Enum):
    PROFILE_UNSPECIFIED = "PROFILE_UNSPECIFIED"
    OPTIMIZE_UTILIZATION = "OPTIMIZE_UTILIZATION"
    BALANCED = "BALANCED"


@dataclass_json
@dataclass
class ClusterAutoscaling:
    r"""ClusterAutoscaling
    ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
    """
    
    autoprovisioning_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoprovisioningLocations') }})
    autoprovisioning_node_pool_defaults: Optional[AutoprovisioningNodePoolDefaults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoprovisioningNodePoolDefaults') }})
    autoscaling_profile: Optional[ClusterAutoscalingAutoscalingProfileEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingProfile') }})
    enable_node_autoprovisioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableNodeAutoprovisioning') }})
    resource_limits: Optional[List[ResourceLimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLimits') }})
    
