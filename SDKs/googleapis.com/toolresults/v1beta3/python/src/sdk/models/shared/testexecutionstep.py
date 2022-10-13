from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testissue
from . import testsuiteoverview
from . import testtiming
from . import toolexecution


@dataclass_json
@dataclass
class TestExecutionStep:
    test_issues: Optional[List[testissue.TestIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testIssues' }})
    test_suite_overviews: Optional[List[testsuiteoverview.TestSuiteOverview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSuiteOverviews' }})
    test_timing: Optional[testtiming.TestTiming] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTiming' }})
    tool_execution: Optional[toolexecution.ToolExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolExecution' }})
    
