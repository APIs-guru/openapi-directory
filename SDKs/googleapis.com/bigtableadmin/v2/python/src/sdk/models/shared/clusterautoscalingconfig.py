from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterAutoscalingConfig:
    r"""ClusterAutoscalingConfig
    Autoscaling config for a cluster.
    """
    
    autoscaling_limits: Optional[AutoscalingLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingLimits') }})
    autoscaling_targets: Optional[AutoscalingTargets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingTargets') }})
    
