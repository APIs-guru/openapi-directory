from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1testcaseresult


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    test_case_results: Optional[List[googleclouddialogflowcxv3beta1testcaseresult.GoogleCloudDialogflowCxV3beta1TestCaseResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseResults' }})
    
