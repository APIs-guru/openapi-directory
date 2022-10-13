from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudChannelV1PeriodPeriodTypeEnum(str, Enum):
    PERIOD_TYPE_UNSPECIFIED = "PERIOD_TYPE_UNSPECIFIED"
    DAY = "DAY"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclass
class GoogleCloudChannelV1Period:
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    period_type: Optional[GoogleCloudChannelV1PeriodPeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodType' }})
    
