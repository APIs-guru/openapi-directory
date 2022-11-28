from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse:
    r"""GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse
    The response message for TestCases.ListTestCaseResults.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    test_case_results: Optional[List[GoogleCloudDialogflowCxV3beta1TestCaseResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseResults') }})
    
