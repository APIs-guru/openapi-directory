from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuestionItem:
    r"""QuestionItem
    A form item containing a single question.
    """
    
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    question: Optional[Question] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    

@dataclass_json
@dataclass
class QuestionItemInput:
    r"""QuestionItemInput
    A form item containing a single question.
    """
    
    image: Optional[ImageInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    question: Optional[QuestionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    
