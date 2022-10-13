from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regioncount


@dataclass_json
@dataclass
class TopDirectionSources:
    day_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayCount' }})
    region_counts: Optional[List[regioncount.RegionCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCounts' }})
    
