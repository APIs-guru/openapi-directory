from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taghold


@dataclass_json
@dataclass
class ListTagHoldsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tag_holds: Optional[List[taghold.TagHold]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagHolds' }})
    
