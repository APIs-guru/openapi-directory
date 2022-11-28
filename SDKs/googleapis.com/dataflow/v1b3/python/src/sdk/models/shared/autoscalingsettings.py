from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AutoscalingSettingsAlgorithmEnum(str, Enum):
    AUTOSCALING_ALGORITHM_UNKNOWN = "AUTOSCALING_ALGORITHM_UNKNOWN"
    AUTOSCALING_ALGORITHM_NONE = "AUTOSCALING_ALGORITHM_NONE"
    AUTOSCALING_ALGORITHM_BASIC = "AUTOSCALING_ALGORITHM_BASIC"


@dataclass_json
@dataclass
class AutoscalingSettings:
    r"""AutoscalingSettings
    Settings for WorkerPool autoscaling.
    """
    
    algorithm: Optional[AutoscalingSettingsAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    max_num_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumWorkers') }})
    
