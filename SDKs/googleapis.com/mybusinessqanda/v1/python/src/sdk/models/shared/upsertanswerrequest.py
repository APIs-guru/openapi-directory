from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import answer


@dataclass_json
@dataclass
class UpsertAnswerRequest:
    answer: Optional[answer.Answer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer' }})
    
