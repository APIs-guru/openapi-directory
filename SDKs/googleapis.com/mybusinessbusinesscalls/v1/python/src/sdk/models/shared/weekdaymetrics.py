from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    day: Optional[WeekDayMetricsDayEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    missed_calls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missedCallsCount' }})
    
