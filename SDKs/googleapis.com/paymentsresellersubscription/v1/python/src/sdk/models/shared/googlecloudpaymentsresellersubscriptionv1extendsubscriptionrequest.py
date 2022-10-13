from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1extension


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest:
    extension: Optional[googlecloudpaymentsresellersubscriptionv1extension.GoogleCloudPaymentsResellerSubscriptionV1Extension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
