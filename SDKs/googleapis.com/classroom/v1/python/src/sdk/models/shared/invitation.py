from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InvitationRoleEnum(str, Enum):
    COURSE_ROLE_UNSPECIFIED = "COURSE_ROLE_UNSPECIFIED"
    STUDENT = "STUDENT"
    TEACHER = "TEACHER"
    OWNER = "OWNER"


@dataclass_json
@dataclass
class Invitation:
    r"""Invitation
    An invitation to join a course.
    """
    
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    role: Optional[InvitationRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
