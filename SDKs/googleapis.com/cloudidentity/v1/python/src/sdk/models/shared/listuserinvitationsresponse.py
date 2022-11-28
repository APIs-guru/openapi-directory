from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUserInvitationsResponse:
    r"""ListUserInvitationsResponse
    Response message for UserInvitation listing request.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_invitations: Optional[List[UserInvitation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInvitations') }})
    
