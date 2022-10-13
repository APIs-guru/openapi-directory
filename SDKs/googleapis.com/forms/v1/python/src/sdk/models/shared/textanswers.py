from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import textanswer


@dataclass_json
@dataclass
class TextAnswers:
    answers: Optional[List[textanswer.TextAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answers' }})
    
