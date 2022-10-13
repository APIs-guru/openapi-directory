from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum(str, Enum):
    UNIT_UNSPECIFIED = "UNIT_UNSPECIFIED"
    MONTH = "MONTH"
    DAY = "DAY"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Duration:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    unit: Optional[GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
