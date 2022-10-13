from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1subscription


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse:
    subscription: Optional[googlecloudpaymentsresellersubscriptionv1subscription.GoogleCloudPaymentsResellerSubscriptionV1Subscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    
