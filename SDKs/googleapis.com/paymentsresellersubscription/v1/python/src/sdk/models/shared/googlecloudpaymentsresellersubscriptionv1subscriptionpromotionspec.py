from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1duration
from . import googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum(str, Enum):
    PROMOTION_TYPE_UNSPECIFIED = "PROMOTION_TYPE_UNSPECIFIED"
    PROMOTION_TYPE_FREE_TRIAL = "PROMOTION_TYPE_FREE_TRIAL"
    PROMOTION_TYPE_INTRODUCTORY_PRICING = "PROMOTION_TYPE_INTRODUCTORY_PRICING"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec:
    free_trial_duration: Optional[googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeTrialDuration' }})
    introductory_pricing_details: Optional[googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introductoryPricingDetails' }})
    promotion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotion' }})
    type: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
