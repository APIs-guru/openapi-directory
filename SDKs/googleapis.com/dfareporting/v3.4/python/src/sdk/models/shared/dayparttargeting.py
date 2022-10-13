from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class DayPartTargetingDaysOfWeekEnum(str, Enum):
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


@dataclass_json
@dataclass
class DayPartTargeting:
    days_of_week: Optional[List[DayPartTargetingDaysOfWeekEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daysOfWeek' }})
    hours_of_day: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hoursOfDay' }})
    user_local_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLocalTime' }})
    
