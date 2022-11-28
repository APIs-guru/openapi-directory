from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TimePeriodCloseDayEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"

class TimePeriodOpenDayEnum(str, Enum):
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
class TimePeriod:
    r"""TimePeriod
    Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.
    """
    
    close_day: Optional[TimePeriodCloseDayEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeDay') }})
    close_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeTime') }})
    open_day: Optional[TimePeriodOpenDayEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openDay') }})
    open_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openTime') }})
    
