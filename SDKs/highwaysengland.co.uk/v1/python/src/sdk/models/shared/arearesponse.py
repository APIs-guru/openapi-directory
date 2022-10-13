from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import area


@dataclass_json
@dataclass
class AreaResponse:
    areas: Optional[List[area.Area]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areas' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_count' }})
    
