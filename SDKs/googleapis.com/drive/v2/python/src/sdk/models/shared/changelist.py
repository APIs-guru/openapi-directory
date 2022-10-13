from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import change


@dataclass_json
@dataclass
class ChangeList:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[change.Change]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    largest_change_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largestChangeId' }})
    new_start_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newStartPageToken' }})
    next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextLink' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
