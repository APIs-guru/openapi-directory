from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInboundSsoAssignmentsResponse:
    r"""ListInboundSsoAssignmentsResponse
    Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
    """
    
    inbound_sso_assignments: Optional[List[InboundSsoAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundSsoAssignments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
