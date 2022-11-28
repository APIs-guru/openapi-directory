from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum(str, Enum):
    PROMOTION_TYPE_UNSPECIFIED = "PROMOTION_TYPE_UNSPECIFIED"
    PROMOTION_TYPE_FREE_TRIAL = "PROMOTION_TYPE_FREE_TRIAL"
    PROMOTION_TYPE_INTRODUCTORY_PRICING = "PROMOTION_TYPE_INTRODUCTORY_PRICING"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Promotion:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Promotion
    A Promotion resource that defines a promotion for a subscription that can be resold.
    """
    
    applicable_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableProducts') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    free_trial_duration: Optional[GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialDuration') }})
    introductory_pricing_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    promotion_type: Optional[GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionType') }})
    region_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCodes') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    titles: Optional[List[GoogleTypeLocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titles') }})
    
