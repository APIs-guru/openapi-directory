from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import topdirectionsources


@dataclass_json
@dataclass
class LocationDrivingDirectionMetrics:
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationName' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    top_direction_sources: Optional[List[topdirectionsources.TopDirectionSources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topDirectionSources' }})
    
