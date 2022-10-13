from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1amount


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig:
    amount: Optional[googlecloudpaymentsresellersubscriptionv1amount.GoogleCloudPaymentsResellerSubscriptionV1Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
