from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import modifyindividualstudentsoptions

class ModifyAnnouncementAssigneesRequestAssigneeModeEnum(str, Enum):
    ASSIGNEE_MODE_UNSPECIFIED = "ASSIGNEE_MODE_UNSPECIFIED"
    ALL_STUDENTS = "ALL_STUDENTS"
    INDIVIDUAL_STUDENTS = "INDIVIDUAL_STUDENTS"


@dataclass_json
@dataclass
class ModifyAnnouncementAssigneesRequest:
    assignee_mode: Optional[ModifyAnnouncementAssigneesRequestAssigneeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigneeMode' }})
    modify_individual_students_options: Optional[modifyindividualstudentsoptions.ModifyIndividualStudentsOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifyIndividualStudentsOptions' }})
    
