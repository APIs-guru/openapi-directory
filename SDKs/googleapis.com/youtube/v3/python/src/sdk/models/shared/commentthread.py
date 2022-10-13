from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import commentthreadreplies
from . import commentthreadsnippet


@dataclass_json
@dataclass
class CommentThread:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    replies: Optional[commentthreadreplies.CommentThreadReplies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    snippet: Optional[commentthreadsnippet.CommentThreadSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
