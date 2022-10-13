from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userinvitation


@dataclass_json
@dataclass
class ListUserInvitationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    user_invitations: Optional[List[userinvitation.UserInvitation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInvitations' }})
    
