from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import correctanswers
from . import feedback
from . import feedback
from . import feedback


@dataclass_json
@dataclass
class Grading:
    correct_answers: Optional[correctanswers.CorrectAnswers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctAnswers' }})
    general_feedback: Optional[feedback.Feedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generalFeedback' }})
    point_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointValue' }})
    when_right: Optional[feedback.Feedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whenRight' }})
    when_wrong: Optional[feedback.Feedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whenWrong' }})
    
