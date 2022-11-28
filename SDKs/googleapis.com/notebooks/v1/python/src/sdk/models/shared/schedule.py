from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ScheduleStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"
    UPDATE_FAILED = "UPDATE_FAILED"
    INITIALIZING = "INITIALIZING"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Schedule:
    r"""Schedule
    The definition of a schedule.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    cron_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cronSchedule') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    execution_template: Optional[ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTemplate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recent_executions: Optional[List[Execution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentExecutions') }})
    state: Optional[ScheduleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class ScheduleInput:
    r"""ScheduleInput
    The definition of a schedule.
    """
    
    cron_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cronSchedule') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    execution_template: Optional[ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTemplate') }})
    state: Optional[ScheduleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
