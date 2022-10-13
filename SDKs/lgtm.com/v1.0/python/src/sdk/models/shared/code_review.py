from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import codereview_languages

class CodeReviewStatusEnum(str, Enum):
    PENDING = "pending"
    FAILURE = "failure"
    SUCCESS = "success"


@dataclass_json
@dataclass
class CodeReview:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    languages: Optional[List[codereview_languages.CodereviewLanguages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    results_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results-url' }})
    status: Optional[CodeReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status-message' }})
    
