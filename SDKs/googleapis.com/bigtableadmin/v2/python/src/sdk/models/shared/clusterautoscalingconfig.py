from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoscalinglimits
from . import autoscalingtargets


@dataclass_json
@dataclass
class ClusterAutoscalingConfig:
    autoscaling_limits: Optional[autoscalinglimits.AutoscalingLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscalingLimits' }})
    autoscaling_targets: Optional[autoscalingtargets.AutoscalingTargets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscalingTargets' }})
    
