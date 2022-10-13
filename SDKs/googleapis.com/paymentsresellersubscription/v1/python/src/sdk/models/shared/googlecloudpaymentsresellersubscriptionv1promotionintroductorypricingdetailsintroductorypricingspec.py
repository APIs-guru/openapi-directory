from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1amount


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec:
    discount_amount: Optional[googlecloudpaymentsresellersubscriptionv1amount.GoogleCloudPaymentsResellerSubscriptionV1Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountAmount' }})
    discount_ratio_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountRatioMicros' }})
    recurrence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurrenceCount' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
