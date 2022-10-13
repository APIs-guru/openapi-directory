from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userprofile


@dataclass_json
@dataclass
class Guardian:
    guardian_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guardianId' }})
    guardian_profile: Optional[userprofile.UserProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guardianProfile' }})
    invited_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitedEmailAddress' }})
    student_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studentId' }})
    
