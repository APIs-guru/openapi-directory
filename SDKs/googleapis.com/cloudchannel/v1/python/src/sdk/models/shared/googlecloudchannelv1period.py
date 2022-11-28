from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudChannelV1PeriodPeriodTypeEnum(str, Enum):
    PERIOD_TYPE_UNSPECIFIED = "PERIOD_TYPE_UNSPECIFIED"
    DAY = "DAY"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclass
class GoogleCloudChannelV1Period:
    r"""GoogleCloudChannelV1Period
    Represents period in days/months/years.
    """
    
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    period_type: Optional[GoogleCloudChannelV1PeriodPeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    
