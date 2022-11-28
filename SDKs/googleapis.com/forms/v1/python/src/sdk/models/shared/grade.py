from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Grade:
    r"""Grade
    Grade information associated with a respondent's answer to a question.
    """
    
    correct: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correct') }})
    feedback: Optional[Feedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
