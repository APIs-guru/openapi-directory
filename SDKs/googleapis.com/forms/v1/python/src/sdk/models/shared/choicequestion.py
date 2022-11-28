from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ChoiceQuestionTypeEnum(str, Enum):
    CHOICE_TYPE_UNSPECIFIED = "CHOICE_TYPE_UNSPECIFIED"
    RADIO = "RADIO"
    CHECKBOX = "CHECKBOX"
    DROP_DOWN = "DROP_DOWN"


@dataclass_json
@dataclass
class ChoiceQuestionInput:
    r"""ChoiceQuestionInput
    A radio/checkbox/dropdown question.
    """
    
    options: Optional[List[OptionInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    shuffle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffle') }})
    type: Optional[ChoiceQuestionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ChoiceQuestion:
    r"""ChoiceQuestion
    A radio/checkbox/dropdown question.
    """
    
    options: Optional[List[Option]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    shuffle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffle') }})
    type: Optional[ChoiceQuestionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
