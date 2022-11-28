from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Grading:
    r"""Grading
    Grading for a single question
    """
    
    correct_answers: Optional[CorrectAnswers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctAnswers') }})
    general_feedback: Optional[Feedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalFeedback') }})
    point_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointValue') }})
    when_right: Optional[Feedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whenRight') }})
    when_wrong: Optional[Feedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whenWrong') }})
    
