from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DayPartTargeting
    Day Part Targeting.
    """
    
    days_of_week: Optional[List[DayPartTargetingDaysOfWeekEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysOfWeek') }})
    hours_of_day: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hoursOfDay') }})
    user_local_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLocalTime') }})
    
