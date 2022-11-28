from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TestCaseStatusEnum(str, Enum):
    PASSED = "passed"
    FAILED = "failed"
    ERROR = "error"
    SKIPPED = "skipped"
    FLAKY = "flaky"


@dataclass_json
@dataclass
class TestCase:
    elapsed_time: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elapsedTime') }})
    end_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    skipped_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedMessage') }})
    stack_traces: Optional[List[StackTrace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackTraces') }})
    start_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[TestCaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    test_case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseId') }})
    test_case_reference: Optional[TestCaseReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseReference') }})
    tool_outputs: Optional[List[ToolOutputReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolOutputs') }})
    
