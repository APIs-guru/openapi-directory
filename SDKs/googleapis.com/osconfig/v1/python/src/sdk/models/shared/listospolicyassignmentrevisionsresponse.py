from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyassignment


@dataclass_json
@dataclass
class ListOsPolicyAssignmentRevisionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    os_policy_assignments: Optional[List[ospolicyassignment.OsPolicyAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyAssignments' }})
    
