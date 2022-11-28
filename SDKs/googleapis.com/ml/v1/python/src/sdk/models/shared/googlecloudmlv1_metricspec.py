from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudMlV1MetricSpecNameEnum(str, Enum):
    METRIC_NAME_UNSPECIFIED = "METRIC_NAME_UNSPECIFIED"
    CPU_USAGE = "CPU_USAGE"
    GPU_DUTY_CYCLE = "GPU_DUTY_CYCLE"


@dataclass_json
@dataclass
class GoogleCloudMlV1MetricSpec:
    r"""GoogleCloudMlV1MetricSpec
    MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.
    """
    
    name: Optional[GoogleCloudMlV1MetricSpecNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
