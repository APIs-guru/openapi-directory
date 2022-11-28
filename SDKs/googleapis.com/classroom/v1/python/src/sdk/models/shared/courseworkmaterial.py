from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CourseWorkMaterialAssigneeModeEnum(str, Enum):
    ASSIGNEE_MODE_UNSPECIFIED = "ASSIGNEE_MODE_UNSPECIFIED"
    ALL_STUDENTS = "ALL_STUDENTS"
    INDIVIDUAL_STUDENTS = "INDIVIDUAL_STUDENTS"

class CourseWorkMaterialStateEnum(str, Enum):
    COURSEWORK_MATERIAL_STATE_UNSPECIFIED = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED"
    PUBLISHED = "PUBLISHED"
    DRAFT = "DRAFT"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class CourseWorkMaterial:
    r"""CourseWorkMaterial
    Course work material created by a teacher for students of the course
    """
    
    alternate_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    assignee_mode: Optional[CourseWorkMaterialAssigneeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigneeMode') }})
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    creator_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorUserId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    individual_students_options: Optional[IndividualStudentsOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualStudentsOptions') }})
    materials: Optional[List[Material]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    scheduled_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledTime') }})
    state: Optional[CourseWorkMaterialStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    topic_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
