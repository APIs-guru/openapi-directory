from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudMlV1MetricSpecNameEnum(str, Enum):
    METRIC_NAME_UNSPECIFIED = "METRIC_NAME_UNSPECIFIED"
    CPU_USAGE = "CPU_USAGE"
    GPU_DUTY_CYCLE = "GPU_DUTY_CYCLE"


@dataclass_json
@dataclass
class GoogleCloudMlV1MetricSpec:
    name: Optional[GoogleCloudMlV1MetricSpecNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    target: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
