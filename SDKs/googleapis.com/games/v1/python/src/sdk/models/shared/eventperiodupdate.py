from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventperiodrange
from . import eventupdaterequest


@dataclass_json
@dataclass
class EventPeriodUpdate:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    time_period: Optional[eventperiodrange.EventPeriodRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timePeriod' }})
    updates: Optional[List[eventupdaterequest.EventUpdateRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updates' }})
    
