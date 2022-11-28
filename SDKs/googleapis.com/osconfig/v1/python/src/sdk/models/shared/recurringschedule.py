from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RecurringScheduleFrequencyEnum(str, Enum):
    FREQUENCY_UNSPECIFIED = "FREQUENCY_UNSPECIFIED"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class RecurringScheduleInput:
    r"""RecurringScheduleInput
    Sets the time for recurring patch deployments.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    frequency: Optional[RecurringScheduleFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    monthly: Optional[MonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    time_of_day: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeOfDay') }})
    time_zone: Optional[TimeZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    weekly: Optional[WeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly') }})
    

@dataclass_json
@dataclass
class RecurringSchedule:
    r"""RecurringSchedule
    Sets the time for recurring patch deployments.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    frequency: Optional[RecurringScheduleFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    last_execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExecuteTime') }})
    monthly: Optional[MonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    next_execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextExecuteTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    time_of_day: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeOfDay') }})
    time_zone: Optional[TimeZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    weekly: Optional[WeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly') }})
    
