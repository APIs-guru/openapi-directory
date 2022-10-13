from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import comment


@dataclass_json
@dataclass
class CommentList:
    items: Optional[List[comment.Comment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextLink' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
