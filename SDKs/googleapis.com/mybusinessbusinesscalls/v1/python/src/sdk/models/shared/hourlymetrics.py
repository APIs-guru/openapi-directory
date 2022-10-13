from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HourlyMetrics:
    hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    missed_calls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missedCallsCount' }})
    
