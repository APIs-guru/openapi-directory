from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PerformanceGoalPerformanceGoalTypeEnum(str, Enum):
    PERFORMANCE_GOAL_TYPE_UNSPECIFIED = "PERFORMANCE_GOAL_TYPE_UNSPECIFIED"
    PERFORMANCE_GOAL_TYPE_CPM = "PERFORMANCE_GOAL_TYPE_CPM"
    PERFORMANCE_GOAL_TYPE_CPC = "PERFORMANCE_GOAL_TYPE_CPC"
    PERFORMANCE_GOAL_TYPE_CPA = "PERFORMANCE_GOAL_TYPE_CPA"
    PERFORMANCE_GOAL_TYPE_CTR = "PERFORMANCE_GOAL_TYPE_CTR"
    PERFORMANCE_GOAL_TYPE_VIEWABILITY = "PERFORMANCE_GOAL_TYPE_VIEWABILITY"
    PERFORMANCE_GOAL_TYPE_CPIAVC = "PERFORMANCE_GOAL_TYPE_CPIAVC"
    PERFORMANCE_GOAL_TYPE_CPE = "PERFORMANCE_GOAL_TYPE_CPE"
    PERFORMANCE_GOAL_TYPE_CLICK_CVR = "PERFORMANCE_GOAL_TYPE_CLICK_CVR"
    PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR = "PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR"
    PERFORMANCE_GOAL_TYPE_VCPM = "PERFORMANCE_GOAL_TYPE_VCPM"
    PERFORMANCE_GOAL_TYPE_VTR = "PERFORMANCE_GOAL_TYPE_VTR"
    PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE = "PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE"
    PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE = "PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE"
    PERFORMANCE_GOAL_TYPE_OTHER = "PERFORMANCE_GOAL_TYPE_OTHER"


@dataclass_json
@dataclass
class PerformanceGoal:
    r"""PerformanceGoal
    Settings that control the performance goal of a campaign or insertion order.
    """
    
    performance_goal_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoalAmountMicros') }})
    performance_goal_percentage_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoalPercentageMicros') }})
    performance_goal_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoalString') }})
    performance_goal_type: Optional[PerformanceGoalPerformanceGoalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoalType') }})
    
