from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import choicequestion


@dataclass_json
@dataclass
class Grid:
    columns: Optional[choicequestion.ChoiceQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    shuffle_questions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shuffleQuestions' }})
    
