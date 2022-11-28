from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum(str, Enum):
    UNIT_UNSPECIFIED = "UNIT_UNSPECIFIED"
    MONTH = "MONTH"
    DAY = "DAY"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Duration:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Duration
    Describes the length of a period of a time.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    unit: Optional[GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
