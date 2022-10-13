from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import executiontemplate
from . import execution

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
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    cron_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cronSchedule' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    execution_template: Optional[executiontemplate.ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTemplate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recent_executions: Optional[List[execution.Execution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentExecutions' }})
    state: Optional[ScheduleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
