from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeofday
from . import date
from . import date
from . import timeofday


@dataclass_json
@dataclass
class Schedule:
    end_time_of_day: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeOfDay' }})
    repeat_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatInterval' }})
    schedule_end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleEndDate' }})
    schedule_start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleStartDate' }})
    start_time_of_day: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeOfDay' }})
    
