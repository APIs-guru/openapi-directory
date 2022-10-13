from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Schedule:
    interval_duration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalDurationDays' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    
