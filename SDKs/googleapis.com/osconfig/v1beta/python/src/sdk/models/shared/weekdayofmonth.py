from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WeekDayOfMonthDayOfWeekEnum(str, Enum):
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
class WeekDayOfMonth:
    day_of_week: Optional[WeekDayOfMonthDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    day_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOffset' }})
    week_ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weekOrdinal' }})
    
