from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1duration


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Extension:
    duration: Optional[googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    partner_user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerUserToken' }})
    
