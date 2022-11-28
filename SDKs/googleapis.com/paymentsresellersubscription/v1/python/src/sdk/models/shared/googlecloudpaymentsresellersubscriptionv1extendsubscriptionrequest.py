from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest:
    r"""GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest
    Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.
    """
    
    extension: Optional[GoogleCloudPaymentsResellerSubscriptionV1Extension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
