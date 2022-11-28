from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Assignment:
    r"""Assignment
    Additional details for assignments.
    """
    
    student_work_folder: Optional[DriveFolder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentWorkFolder') }})
    
