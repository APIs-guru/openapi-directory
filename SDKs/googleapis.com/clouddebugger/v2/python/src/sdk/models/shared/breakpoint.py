from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import variable
from . import sourcelocation
from . import stackframe
from . import statusmessage
from . import variable

class BreakpointActionEnum(str, Enum):
    CAPTURE = "CAPTURE"
    LOG = "LOG"

class BreakpointLogLevelEnum(str, Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"

class BreakpointStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STATE_CANARY_PENDING_AGENTS = "STATE_CANARY_PENDING_AGENTS"
    STATE_CANARY_ACTIVE = "STATE_CANARY_ACTIVE"
    STATE_ROLLING_TO_ALL = "STATE_ROLLING_TO_ALL"
    STATE_IS_FINAL = "STATE_IS_FINAL"


@dataclass_json
@dataclass
class Breakpoint:
    action: Optional[BreakpointActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    canary_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canaryExpireTime' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    evaluated_expressions: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatedExpressions' }})
    expressions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressions' }})
    final_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_final_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFinalState' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    location: Optional[sourcelocation.SourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    log_level: Optional[BreakpointLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLevel' }})
    log_message_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logMessageFormat' }})
    stack_frames: Optional[List[stackframe.StackFrame]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackFrames' }})
    state: Optional[BreakpointStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[statusmessage.StatusMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmail' }})
    variable_table: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variableTable' }})
    
