from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInvitationsResponse:
    r"""ListInvitationsResponse
    Response when listing invitations.
    """
    
    invitations: Optional[List[Invitation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
