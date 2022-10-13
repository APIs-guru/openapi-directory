from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import commentsnippet


@dataclass_json
@dataclass
class Comment:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[commentsnippet.CommentSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
