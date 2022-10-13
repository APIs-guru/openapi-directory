from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventperiodupdate


@dataclass_json
@dataclass
class EventRecordRequest:
    current_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentTimeMillis' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    time_periods: Optional[List[eventperiodupdate.EventPeriodUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timePeriods' }})
    
