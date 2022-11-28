from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse:
    cycle_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycleEndTime') }})
    free_trial_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialEndTime') }})
    renewal_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalTime') }})
    
