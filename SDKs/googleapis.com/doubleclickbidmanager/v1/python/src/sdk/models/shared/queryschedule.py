from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class QueryScheduleFrequencyEnum(str, Enum):
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
    end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeMs' }})
    frequency: Optional[QueryScheduleFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    next_run_minute_of_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRunMinuteOfDay' }})
    next_run_timezone_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRunTimezoneCode' }})
    start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeMs' }})
    
