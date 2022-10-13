from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3testcase


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListTestCasesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    test_cases: Optional[List[googleclouddialogflowcxv3testcase.GoogleCloudDialogflowCxV3TestCase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCases' }})
    
