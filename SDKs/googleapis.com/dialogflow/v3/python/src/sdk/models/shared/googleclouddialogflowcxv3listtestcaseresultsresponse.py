from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3testcaseresult


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListTestCaseResultsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    test_case_results: Optional[List[googleclouddialogflowcxv3testcaseresult.GoogleCloudDialogflowCxV3TestCaseResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseResults' }})
    
