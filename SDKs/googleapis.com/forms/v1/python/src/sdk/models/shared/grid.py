from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Grid:
    r"""Grid
    A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
    """
    
    columns: Optional[ChoiceQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    shuffle_questions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleQuestions') }})
    

@dataclass_json
@dataclass
class GridInput:
    r"""GridInput
    A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
    """
    
    columns: Optional[ChoiceQuestionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    shuffle_questions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleQuestions') }})
    
