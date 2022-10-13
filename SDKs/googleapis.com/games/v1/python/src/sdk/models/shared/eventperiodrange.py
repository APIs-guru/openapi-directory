from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventPeriodRange:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    period_end_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodEndMillis' }})
    period_start_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodStartMillis' }})
    
