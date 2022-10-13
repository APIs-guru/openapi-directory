from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import publicsubscriptionstatus


@dataclass_json
@dataclass
class PublicSubscriptionStatusesResponse:
    recipient: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    subscription_statuses: List[publicsubscriptionstatus.PublicSubscriptionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionStatuses' }})
    
