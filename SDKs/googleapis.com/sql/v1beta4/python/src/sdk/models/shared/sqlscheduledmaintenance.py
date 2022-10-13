from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SQLScheduledMaintenance:
    can_defer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDefer' }})
    can_reschedule: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReschedule' }})
    schedule_deadline_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleDeadlineTime' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
