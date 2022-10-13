from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import correctanswer


@dataclass_json
@dataclass
class CorrectAnswers:
    answers: Optional[List[correctanswer.CorrectAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answers' }})
    
