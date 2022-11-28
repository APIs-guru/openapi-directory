from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestExecutionStep:
    r"""TestExecutionStep
    A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
    """
    
    test_issues: Optional[List[TestIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testIssues') }})
    test_suite_overviews: Optional[List[TestSuiteOverview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSuiteOverviews') }})
    test_timing: Optional[TestTiming] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTiming') }})
    tool_execution: Optional[ToolExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolExecution') }})
    
