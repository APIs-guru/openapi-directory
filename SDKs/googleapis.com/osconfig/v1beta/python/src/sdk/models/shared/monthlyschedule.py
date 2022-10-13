from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import weekdayofmonth


@dataclass_json
@dataclass
class MonthlySchedule:
    month_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthDay' }})
    week_day_of_month: Optional[weekdayofmonth.WeekDayOfMonth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weekDayOfMonth' }})
    
