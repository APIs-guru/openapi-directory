from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1continuoustestresult


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse:
    continuous_test_results: Optional[List[googleclouddialogflowcxv3beta1continuoustestresult.GoogleCloudDialogflowCxV3beta1ContinuousTestResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuousTestResults' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
