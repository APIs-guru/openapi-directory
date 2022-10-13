from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AutoscalingSettingsAlgorithmEnum(str, Enum):
    AUTOSCALING_ALGORITHM_UNKNOWN = "AUTOSCALING_ALGORITHM_UNKNOWN"
    AUTOSCALING_ALGORITHM_NONE = "AUTOSCALING_ALGORITHM_NONE"
    AUTOSCALING_ALGORITHM_BASIC = "AUTOSCALING_ALGORITHM_BASIC"


@dataclass_json
@dataclass
class AutoscalingSettings:
    algorithm: Optional[AutoscalingSettingsAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    max_num_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumWorkers' }})
    
