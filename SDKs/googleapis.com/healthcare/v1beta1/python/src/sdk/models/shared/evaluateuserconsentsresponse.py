from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import result


@dataclass_json
@dataclass
class EvaluateUserConsentsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    results: Optional[List[result.Result]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
