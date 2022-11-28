from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod:
    r"""GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod
    A description of what time period or moment in time the product or service is being delivered over.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
