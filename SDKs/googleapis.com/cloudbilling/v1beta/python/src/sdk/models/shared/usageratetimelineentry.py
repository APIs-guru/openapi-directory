from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import estimationtimepoint


@dataclass_json
@dataclass
class UsageRateTimelineEntry:
    effective_time: Optional[estimationtimepoint.EstimationTimePoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveTime' }})
    usage_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageRate' }})
    
