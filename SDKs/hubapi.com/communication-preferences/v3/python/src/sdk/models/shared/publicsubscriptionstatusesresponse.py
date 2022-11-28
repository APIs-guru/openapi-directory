from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublicSubscriptionStatusesResponse:
    r"""PublicSubscriptionStatusesResponse
    A collection of subscription statuses for a contact.
    """
    
    recipient: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    subscription_statuses: List[PublicSubscriptionStatus] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionStatuses') }})
    
