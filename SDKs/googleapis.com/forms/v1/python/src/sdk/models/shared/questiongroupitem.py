from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grid
from . import image
from . import question


@dataclass_json
@dataclass
class QuestionGroupItem:
    grid: Optional[grid.Grid] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grid' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    questions: Optional[List[question.Question]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questions' }})
    
