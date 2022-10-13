from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import duration
from . import timestamp
from . import stacktrace
from . import timestamp
from . import testcasereference
from . import tooloutputreference

class TestCaseStatusEnum(str, Enum):
    PASSED = "passed"
    FAILED = "failed"
    ERROR = "error"
    SKIPPED = "skipped"
    FLAKY = "flaky"


@dataclass_json
@dataclass
class TestCase:
    elapsed_time: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elapsedTime' }})
    end_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    skipped_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippedMessage' }})
    stack_traces: Optional[List[stacktrace.StackTrace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackTraces' }})
    start_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    status: Optional[TestCaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    test_case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseId' }})
    test_case_reference: Optional[testcasereference.TestCaseReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseReference' }})
    tool_outputs: Optional[List[tooloutputreference.ToolOutputReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolOutputs' }})
    
