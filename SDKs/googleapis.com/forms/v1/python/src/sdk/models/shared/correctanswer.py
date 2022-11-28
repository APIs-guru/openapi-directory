from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CorrectAnswer:
    r"""CorrectAnswer
    A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.
    """
    
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
