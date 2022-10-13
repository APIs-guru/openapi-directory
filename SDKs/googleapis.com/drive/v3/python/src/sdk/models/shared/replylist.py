from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reply


@dataclass_json
@dataclass
class ReplyList:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    replies: Optional[List[reply.Reply]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    
