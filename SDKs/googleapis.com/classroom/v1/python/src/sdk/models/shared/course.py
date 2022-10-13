from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import coursematerialset
from . import gradebooksettings
from . import drivefolder

class CourseCourseStateEnum(str, Enum):
    COURSE_STATE_UNSPECIFIED = "COURSE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"
    PROVISIONED = "PROVISIONED"
    DECLINED = "DECLINED"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class Course:
    alternate_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateLink' }})
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    course_group_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseGroupEmail' }})
    course_material_sets: Optional[List[coursematerialset.CourseMaterialSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseMaterialSets' }})
    course_state: Optional[CourseCourseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseState' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    description_heading: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptionHeading' }})
    enrollment_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentCode' }})
    gradebook_settings: Optional[gradebooksettings.GradebookSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradebookSettings' }})
    guardians_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guardiansEnabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerId' }})
    room: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room' }})
    section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    teacher_folder: Optional[drivefolder.DriveFolder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teacherFolder' }})
    teacher_group_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teacherGroupEmail' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
