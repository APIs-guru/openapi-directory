from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import image
from . import question


@dataclass_json
@dataclass
class QuestionItem:
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    question: Optional[question.Question] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'question' }})
    
