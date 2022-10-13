from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum(str, Enum):
    AGGREGATED_TEST_RESULT_UNSPECIFIED = "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    PASSED = "PASSED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ContinuousTestResult:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    result: Optional[GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runTime' }})
    test_case_results: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseResults' }})
    
