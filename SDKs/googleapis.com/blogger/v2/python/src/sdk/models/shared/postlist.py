from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import post


@dataclass_json
@dataclass
class PostList:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[post.Post]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    prev_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prevPageToken' }})
    
