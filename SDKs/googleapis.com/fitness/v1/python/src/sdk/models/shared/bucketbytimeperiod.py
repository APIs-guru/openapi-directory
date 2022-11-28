from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BucketByTimePeriodTypeEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"


@dataclass_json
@dataclass
class BucketByTimePeriod:
    time_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZoneId') }})
    type: Optional[BucketByTimePeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
