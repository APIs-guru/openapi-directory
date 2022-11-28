from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CorrectAnswers:
    r"""CorrectAnswers
    The answer key for a question.
    """
    
    answers: Optional[List[CorrectAnswer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    
