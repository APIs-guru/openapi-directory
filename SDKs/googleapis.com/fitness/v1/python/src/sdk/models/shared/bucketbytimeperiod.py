from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BucketByTimePeriodTypeEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"


@dataclass_json
@dataclass
class BucketByTimePeriod:
    time_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZoneId' }})
    type: Optional[BucketByTimePeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
