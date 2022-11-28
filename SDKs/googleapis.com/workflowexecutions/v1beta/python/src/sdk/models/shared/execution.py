from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExecutionCallLogLevelEnum(str, Enum):
    CALL_LOG_LEVEL_UNSPECIFIED = "CALL_LOG_LEVEL_UNSPECIFIED"
    LOG_ALL_CALLS = "LOG_ALL_CALLS"
    LOG_ERRORS_ONLY = "LOG_ERRORS_ONLY"

class ExecutionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class Execution:
    r"""Execution
    A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
    """
    
    argument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argument') }})
    call_log_level: Optional[ExecutionCallLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callLogLevel') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[ExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    workflow_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowRevisionId') }})
    

@dataclass_json
@dataclass
class ExecutionInput:
    r"""ExecutionInput
    A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
    """
    
    argument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argument') }})
    call_log_level: Optional[ExecutionCallLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callLogLevel') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
