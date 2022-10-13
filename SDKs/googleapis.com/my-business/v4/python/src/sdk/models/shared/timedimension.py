from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timeofday
from . import timerange

class TimeDimensionDayOfWeekEnum(str, Enum):
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
class TimeDimension:
    day_of_week: Optional[TimeDimensionDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    time_of_day: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeOfDay' }})
    time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    
