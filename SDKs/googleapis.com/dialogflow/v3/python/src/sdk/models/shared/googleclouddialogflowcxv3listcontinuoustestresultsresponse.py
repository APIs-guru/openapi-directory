from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3continuoustestresult


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse:
    continuous_test_results: Optional[List[googleclouddialogflowcxv3continuoustestresult.GoogleCloudDialogflowCxV3ContinuousTestResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuousTestResults' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
