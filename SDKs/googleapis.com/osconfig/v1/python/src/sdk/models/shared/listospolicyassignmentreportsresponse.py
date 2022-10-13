from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyassignmentreport


@dataclass_json
@dataclass
class ListOsPolicyAssignmentReportsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    os_policy_assignment_reports: Optional[List[ospolicyassignmentreport.OsPolicyAssignmentReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyAssignmentReports' }})
    
