from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import person


@dataclass_json
@dataclass
class PeopleFeed:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[person.Person]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    
