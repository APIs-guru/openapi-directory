from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeofday
from . import date
from . import timeofday
from . import date


@dataclass_json
@dataclass
class SpecialHourPeriod:
    close_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeTime' }})
    closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed' }})
    end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    open_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openTime' }})
    start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
