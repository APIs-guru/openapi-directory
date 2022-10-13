from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inboundssoassignment


@dataclass_json
@dataclass
class ListInboundSsoAssignmentsResponse:
    inbound_sso_assignments: Optional[List[inboundssoassignment.InboundSsoAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inboundSsoAssignments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
