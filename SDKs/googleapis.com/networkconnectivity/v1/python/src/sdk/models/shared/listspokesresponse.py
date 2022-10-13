from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import spoke


@dataclass_json
@dataclass
class ListSpokesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    spokes: Optional[List[spoke.Spoke]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spokes' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
