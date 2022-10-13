from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransitTableTransitTimeRowTransitTimeValue:
    max_transit_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTransitTimeInDays' }})
    min_transit_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minTransitTimeInDays' }})
    
