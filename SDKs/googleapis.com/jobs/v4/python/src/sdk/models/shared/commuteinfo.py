from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import location


@dataclass_json
@dataclass
class CommuteInfo:
    job_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobLocation' }})
    travel_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelDuration' }})
    
