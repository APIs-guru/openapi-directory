from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import monthlyschedule
from . import timeofday
from . import timezone
from . import weeklyschedule

class RecurringScheduleFrequencyEnum(str, Enum):
    FREQUENCY_UNSPECIFIED = "FREQUENCY_UNSPECIFIED"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class RecurringSchedule:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    frequency: Optional[RecurringScheduleFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    last_execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastExecuteTime' }})
    monthly: Optional[monthlyschedule.MonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly' }})
    next_execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextExecuteTime' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    time_of_day: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeOfDay' }})
    time_zone: Optional[timezone.TimeZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    weekly: Optional[weeklyschedule.WeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weekly' }})
    
