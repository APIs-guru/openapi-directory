from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import individualstudentsoptions
from . import material

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
    alternate_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateLink' }})
    assignee_mode: Optional[CourseWorkMaterialAssigneeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigneeMode' }})
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseId' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    creator_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorUserId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    individual_students_options: Optional[individualstudentsoptions.IndividualStudentsOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individualStudentsOptions' }})
    materials: Optional[List[material.Material]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    scheduled_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledTime' }})
    state: Optional[CourseWorkMaterialStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    topic_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
