from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudMlV1StudyConfigMetricSpecGoalEnum(str, Enum):
    GOAL_TYPE_UNSPECIFIED = "GOAL_TYPE_UNSPECIFIED"
    MAXIMIZE = "MAXIMIZE"
    MINIMIZE = "MINIMIZE"


@dataclass_json
@dataclass
class GoogleCloudMlV1StudyConfigMetricSpec:
    r"""GoogleCloudMlV1StudyConfigMetricSpec
    Represents a metric to optimize.
    """
    
    goal: Optional[GoogleCloudMlV1StudyConfigMetricSpecGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal') }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    
