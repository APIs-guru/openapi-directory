from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userprofile


@dataclass_json
@dataclass
class Teacher:
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseId' }})
    profile: Optional[userprofile.UserProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
