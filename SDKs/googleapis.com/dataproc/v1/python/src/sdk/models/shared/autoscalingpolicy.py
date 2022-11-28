from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoscalingPolicy:
    r"""AutoscalingPolicy
    Describes an autoscaling policy for Dataproc cluster autoscaler.
    """
    
    basic_algorithm: Optional[BasicAutoscalingAlgorithm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAlgorithm') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secondary_worker_config: Optional[InstanceGroupAutoscalingPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryWorkerConfig') }})
    worker_config: Optional[InstanceGroupAutoscalingPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    

@dataclass_json
@dataclass
class AutoscalingPolicyInput:
    r"""AutoscalingPolicyInput
    Describes an autoscaling policy for Dataproc cluster autoscaler.
    """
    
    basic_algorithm: Optional[BasicAutoscalingAlgorithm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAlgorithm') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    secondary_worker_config: Optional[InstanceGroupAutoscalingPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryWorkerConfig') }})
    worker_config: Optional[InstanceGroupAutoscalingPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    
