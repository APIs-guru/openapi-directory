from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placement


@dataclass_json
@dataclass
class PlacementsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    placements: Optional[List[placement.Placement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placements' }})
    
