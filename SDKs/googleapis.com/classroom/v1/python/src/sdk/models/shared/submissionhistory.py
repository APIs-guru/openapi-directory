from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gradehistory
from . import statehistory


@dataclass_json
@dataclass
class SubmissionHistory:
    grade_history: Optional[gradehistory.GradeHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeHistory' }})
    state_history: Optional[statehistory.StateHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateHistory' }})
    
