from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hold


@dataclass_json
@dataclass
class ListHoldsResponse:
    holds: Optional[List[hold.Hold]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holds' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
