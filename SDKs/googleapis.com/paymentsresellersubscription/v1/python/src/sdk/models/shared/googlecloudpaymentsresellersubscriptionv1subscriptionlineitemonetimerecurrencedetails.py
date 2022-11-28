from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails
    Details for a ONE_TIME recurrence line item.
    """
    
    service_period: Optional[GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePeriod') }})
    
