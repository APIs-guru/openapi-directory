from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListTestCasesResponse:
    r"""GoogleCloudDialogflowCxV3beta1ListTestCasesResponse
    The response message for TestCases.ListTestCases.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    test_cases: Optional[List[GoogleCloudDialogflowCxV3beta1TestCase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCases') }})
    
