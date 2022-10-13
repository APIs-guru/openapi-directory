from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    close_day: Optional[TimePeriodCloseDayEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeDay' }})
    close_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeTime' }})
    open_day: Optional[TimePeriodOpenDayEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openDay' }})
    open_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openTime' }})
    
