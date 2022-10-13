from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import basicautoscalingalgorithm
from . import instancegroupautoscalingpolicyconfig
from . import instancegroupautoscalingpolicyconfig


@dataclass_json
@dataclass
class AutoscalingPolicy:
    basic_algorithm: Optional[basicautoscalingalgorithm.BasicAutoscalingAlgorithm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAlgorithm' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secondary_worker_config: Optional[instancegroupautoscalingpolicyconfig.InstanceGroupAutoscalingPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryWorkerConfig' }})
    worker_config: Optional[instancegroupautoscalingpolicyconfig.InstanceGroupAutoscalingPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfig' }})
    
