from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import missdistance
from . import relvelocity


@dataclass_json
@dataclass
class CloseApproachData:
    close_approach_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'close_approach_date' }})
    close_approach_date_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'close_approach_date_full' }})
    epoch_date_close_approach: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epoch_date_close_approach' }})
    miss_distance: Optional[missdistance.MissDistance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miss_distance' }})
    orbiting_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orbiting_body' }})
    relative_velocity: Optional[relvelocity.RelVelocity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relative_velocity' }})
    
