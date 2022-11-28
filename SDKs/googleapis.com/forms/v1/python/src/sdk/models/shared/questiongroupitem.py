from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuestionGroupItem:
    r"""QuestionGroupItem
    Defines a question that comprises multiple questions grouped together.
    """
    
    grid: Optional[Grid] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grid') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    questions: Optional[List[Question]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    

@dataclass_json
@dataclass
class QuestionGroupItemInput:
    r"""QuestionGroupItemInput
    Defines a question that comprises multiple questions grouped together.
    """
    
    grid: Optional[GridInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grid') }})
    image: Optional[ImageInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    questions: Optional[List[QuestionInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    
