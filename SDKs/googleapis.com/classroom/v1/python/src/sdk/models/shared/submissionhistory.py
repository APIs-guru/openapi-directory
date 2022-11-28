from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubmissionHistory:
    r"""SubmissionHistory
    The history of the submission. This currently includes state and grade histories.
    """
    
    grade_history: Optional[GradeHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeHistory') }})
    state_history: Optional[StateHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateHistory') }})
    
