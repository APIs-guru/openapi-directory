from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse:
    r"""GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse
    The response message for Environments.ListTestCaseResults.
    """
    
    continuous_test_results: Optional[List[GoogleCloudDialogflowCxV3beta1ContinuousTestResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuousTestResults') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
