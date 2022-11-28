from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Breakpoint
    ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
    """
    
    action: Optional[BreakpointActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    canary_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canaryExpireTime') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    evaluated_expressions: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatedExpressions') }})
    expressions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressions') }})
    final_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_final_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFinalState') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[SourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    log_level: Optional[BreakpointLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    log_message_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logMessageFormat') }})
    stack_frames: Optional[List[StackFrame]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackFrames') }})
    state: Optional[BreakpointStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[StatusMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEmail') }})
    variable_table: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variableTable') }})
    
