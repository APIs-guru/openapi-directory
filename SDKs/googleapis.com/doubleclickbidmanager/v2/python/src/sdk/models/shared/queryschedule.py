from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import date
from . import date

class QueryScheduleFrequencyEnum(str, Enum):
    FREQUENCY_UNSPECIFIED = "FREQUENCY_UNSPECIFIED"
    ONE_TIME = "ONE_TIME"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    SEMI_MONTHLY = "SEMI_MONTHLY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    YEARLY = "YEARLY"


@dataclass_json
@dataclass
class QuerySchedule:
    end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    frequency: Optional[QueryScheduleFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    next_run_timezone_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRunTimezoneCode' }})
    start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
