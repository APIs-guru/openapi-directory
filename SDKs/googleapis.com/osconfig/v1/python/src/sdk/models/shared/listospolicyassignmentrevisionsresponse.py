from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOsPolicyAssignmentRevisionsResponse:
    r"""ListOsPolicyAssignmentRevisionsResponse
    A response message for listing all revisions for a OS policy assignment.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    os_policy_assignments: Optional[List[OsPolicyAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyAssignments') }})
    
