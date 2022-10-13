from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GuardianInvitationStateEnum(str, Enum):
    GUARDIAN_INVITATION_STATE_UNSPECIFIED = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    COMPLETE = "COMPLETE"


@dataclass_json
@dataclass
class GuardianInvitation:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationId' }})
    invited_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitedEmailAddress' }})
    state: Optional[GuardianInvitationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    student_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studentId' }})
    
