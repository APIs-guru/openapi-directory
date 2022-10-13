from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import comment


@dataclass_json
@dataclass
class ListCommentsResponse:
    comments: Optional[List[comment.Comment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
