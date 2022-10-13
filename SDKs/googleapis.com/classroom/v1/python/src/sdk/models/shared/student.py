from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userprofile
from . import drivefolder


@dataclass_json
@dataclass
class Student:
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseId' }})
    profile: Optional[userprofile.UserProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    student_work_folder: Optional[drivefolder.DriveFolder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studentWorkFolder' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
