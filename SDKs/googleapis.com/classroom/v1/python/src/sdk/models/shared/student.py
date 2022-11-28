from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Student:
    r"""Student
    Student in a course.
    """
    
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    profile: Optional[UserProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    student_work_folder: Optional[DriveFolder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentWorkFolder') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
