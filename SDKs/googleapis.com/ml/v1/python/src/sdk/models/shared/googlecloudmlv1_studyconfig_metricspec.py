from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudMlV1StudyConfigMetricSpecGoalEnum(str, Enum):
    GOAL_TYPE_UNSPECIFIED = "GOAL_TYPE_UNSPECIFIED"
    MAXIMIZE = "MAXIMIZE"
    MINIMIZE = "MINIMIZE"


@dataclass_json
@dataclass
class GoogleCloudMlV1StudyConfigMetricSpec:
    goal: Optional[GoogleCloudMlV1StudyConfigMetricSpecGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal' }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    
