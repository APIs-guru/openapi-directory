from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1testcase


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListTestCasesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    test_cases: Optional[List[googleclouddialogflowcxv3beta1testcase.GoogleCloudDialogflowCxV3beta1TestCase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCases' }})
    
