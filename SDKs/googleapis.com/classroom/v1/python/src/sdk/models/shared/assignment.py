from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import drivefolder


@dataclass_json
@dataclass
class Assignment:
    student_work_folder: Optional[drivefolder.DriveFolder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studentWorkFolder' }})
    
