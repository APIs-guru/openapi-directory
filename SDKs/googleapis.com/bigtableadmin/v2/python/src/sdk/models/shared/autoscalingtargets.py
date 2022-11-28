from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoscalingTargets:
    r"""AutoscalingTargets
    The Autoscaling targets for a Cluster. These determine the recommended nodes.
    """
    
    cpu_utilization_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilizationPercent') }})
    storage_utilization_gib_per_node: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageUtilizationGibPerNode') }})
    
