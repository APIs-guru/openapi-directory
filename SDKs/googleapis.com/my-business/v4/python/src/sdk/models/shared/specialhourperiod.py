from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date
from . import date


@dataclass_json
@dataclass
class SpecialHourPeriod:
    close_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeTime' }})
    end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isClosed' }})
    open_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openTime' }})
    start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
