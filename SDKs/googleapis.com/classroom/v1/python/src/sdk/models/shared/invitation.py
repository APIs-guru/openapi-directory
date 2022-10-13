from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InvitationRoleEnum(str, Enum):
    COURSE_ROLE_UNSPECIFIED = "COURSE_ROLE_UNSPECIFIED"
    STUDENT = "STUDENT"
    TEACHER = "TEACHER"
    OWNER = "OWNER"


@dataclass_json
@dataclass
class Invitation:
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    role: Optional[InvitationRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
