from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGuardianInvitationsResponse:
    r"""ListGuardianInvitationsResponse
    Response when listing guardian invitations.
    """
    
    guardian_invitations: Optional[List[GuardianInvitation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guardianInvitations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
