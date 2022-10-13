from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bucketbytimeperiod


@dataclass_json
@dataclass
class BucketByTime:
    duration_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMillis' }})
    period: Optional[bucketbytimeperiod.BucketByTimePeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    
