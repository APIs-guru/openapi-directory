from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import answer


@dataclass_json
@dataclass
class ListAnswersResponse:
    answers: Optional[List[answer.Answer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
