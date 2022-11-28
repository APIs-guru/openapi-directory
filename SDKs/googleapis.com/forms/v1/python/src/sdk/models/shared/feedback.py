from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Feedback:
    r"""Feedback
    Feedback for a respondent about their response to a question.
    """
    
    material: Optional[List[ExtraMaterial]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('material') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
