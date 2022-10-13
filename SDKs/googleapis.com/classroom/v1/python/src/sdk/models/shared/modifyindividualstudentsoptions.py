from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyIndividualStudentsOptions:
    add_student_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addStudentIds' }})
    remove_student_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeStudentIds' }})
    
