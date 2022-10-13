from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1duration
from . import googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails
from . import googletypelocalizedtext

class GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum(str, Enum):
    PROMOTION_TYPE_UNSPECIFIED = "PROMOTION_TYPE_UNSPECIFIED"
    PROMOTION_TYPE_FREE_TRIAL = "PROMOTION_TYPE_FREE_TRIAL"
    PROMOTION_TYPE_INTRODUCTORY_PRICING = "PROMOTION_TYPE_INTRODUCTORY_PRICING"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Promotion:
    applicable_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicableProducts' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    free_trial_duration: Optional[googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeTrialDuration' }})
    introductory_pricing_details: Optional[googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introductoryPricingDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    promotion_type: Optional[GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionType' }})
    region_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCodes' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    titles: Optional[List[googletypelocalizedtext.GoogleTypeLocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titles' }})
    
