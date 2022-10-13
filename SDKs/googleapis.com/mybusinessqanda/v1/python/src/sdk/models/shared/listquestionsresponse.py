from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import question


@dataclass_json
@dataclass
class ListQuestionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    questions: Optional[List[question.Question]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questions' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
