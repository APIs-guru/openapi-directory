from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WeekDayMetricsDayEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


@dataclass_json
@dataclass
class WeekDayMetrics:
    r"""WeekDayMetrics
    Metrics for a week day.
    """
    
    day: Optional[WeekDayMetricsDayEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    missed_calls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missedCallsCount') }})
    
