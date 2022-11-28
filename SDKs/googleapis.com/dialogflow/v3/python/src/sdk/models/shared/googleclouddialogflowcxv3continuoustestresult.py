from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum(str, Enum):
    AGGREGATED_TEST_RESULT_UNSPECIFIED = "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    PASSED = "PASSED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ContinuousTestResult:
    r"""GoogleCloudDialogflowCxV3ContinuousTestResult
    Represents a result from running a test case in an agent environment.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    result: Optional[GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runTime') }})
    test_case_results: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseResults') }})
    
