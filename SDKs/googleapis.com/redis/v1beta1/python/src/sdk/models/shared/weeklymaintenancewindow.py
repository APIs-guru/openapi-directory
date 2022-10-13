from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timeofday

class WeeklyMaintenanceWindowDayEnum(str, Enum):
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
class WeeklyMaintenanceWindow:
    day: Optional[WeeklyMaintenanceWindowDayEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    start_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
