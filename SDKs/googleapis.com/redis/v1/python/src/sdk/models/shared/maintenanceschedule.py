from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaintenanceSchedule:
    r"""MaintenanceSchedule
    Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
    """
    
    can_reschedule: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReschedule') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    schedule_deadline_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleDeadlineTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class MaintenanceScheduleInput:
    r"""MaintenanceScheduleInput
    Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
    """
    
    can_reschedule: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReschedule') }})
    
