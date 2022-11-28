from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""WeekDayOfMonth
    Represents one week day in a month. An example is \"the 4th Sunday\".
    """
    
    day_of_week: Optional[WeekDayOfMonthDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    day_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOffset') }})
    week_ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekOrdinal') }})
    
