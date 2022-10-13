from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import group


@dataclass_json
@dataclass
class ListGroupsResponse:
    group: Optional[List[group.Group]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
