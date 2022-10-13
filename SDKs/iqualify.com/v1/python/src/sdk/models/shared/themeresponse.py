from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThemeResponse:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    number_of_questions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfQuestions' }})
    
