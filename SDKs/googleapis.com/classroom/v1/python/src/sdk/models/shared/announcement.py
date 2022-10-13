from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import individualstudentsoptions
from . import material

class AnnouncementAssigneeModeEnum(str, Enum):
    ASSIGNEE_MODE_UNSPECIFIED = "ASSIGNEE_MODE_UNSPECIFIED"
    ALL_STUDENTS = "ALL_STUDENTS"
    INDIVIDUAL_STUDENTS = "INDIVIDUAL_STUDENTS"

class AnnouncementStateEnum(str, Enum):
    ANNOUNCEMENT_STATE_UNSPECIFIED = "ANNOUNCEMENT_STATE_UNSPECIFIED"
    PUBLISHED = "PUBLISHED"
    DRAFT = "DRAFT"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Announcement:
    alternate_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateLink' }})
    assignee_mode: Optional[AnnouncementAssigneeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigneeMode' }})
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseId' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    creator_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorUserId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    individual_students_options: Optional[individualstudentsoptions.IndividualStudentsOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individualStudentsOptions' }})
    materials: Optional[List[material.Material]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    scheduled_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledTime' }})
    state: Optional[AnnouncementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
