from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import guardianinvitation


@dataclass_json
@dataclass
class ListGuardianInvitationsResponse:
    guardian_invitations: Optional[List[guardianinvitation.GuardianInvitation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guardianInvitations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
