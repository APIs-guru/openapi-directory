from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import weekdayinputmodel
from . import weekdayinputmodel
from . import weekdayinputmodel
from . import weekdayinputmodel
from . import weekdayinputmodel
from . import weekdayinputmodel
from . import weekdayinputmodel


@dataclass_json
@dataclass
class AvailabilityInputModel:
    fri: Optional[weekdayinputmodel.WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fri' }})
    mon: Optional[weekdayinputmodel.WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mon' }})
    sat: Optional[weekdayinputmodel.WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sat' }})
    sun: Optional[weekdayinputmodel.WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sun' }})
    thu: Optional[weekdayinputmodel.WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thu' }})
    tue: Optional[weekdayinputmodel.WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tue' }})
    wed: Optional[weekdayinputmodel.WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wed' }})
    
