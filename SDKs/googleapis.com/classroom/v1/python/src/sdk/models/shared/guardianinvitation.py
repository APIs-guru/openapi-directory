from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GuardianInvitationStateEnum(str, Enum):
    GUARDIAN_INVITATION_STATE_UNSPECIFIED = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    COMPLETE = "COMPLETE"


@dataclass_json
@dataclass
class GuardianInvitation:
    r"""GuardianInvitation
    An invitation to become the guardian of a specified user, sent to a specified email address.
    """
    
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitationId') }})
    invited_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitedEmailAddress') }})
    state: Optional[GuardianInvitationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    student_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentId') }})
    
