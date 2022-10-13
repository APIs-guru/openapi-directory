from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import feedback


@dataclass_json
@dataclass
class Grade:
    correct: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correct' }})
    feedback: Optional[feedback.Feedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
