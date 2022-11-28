from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOsPolicyAssignmentReportsResponse:
    r"""ListOsPolicyAssignmentReportsResponse
    A response message for listing OS Policy assignment reports including the page of results and page token.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    os_policy_assignment_reports: Optional[List[OsPolicyAssignmentReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyAssignmentReports') }})
    
