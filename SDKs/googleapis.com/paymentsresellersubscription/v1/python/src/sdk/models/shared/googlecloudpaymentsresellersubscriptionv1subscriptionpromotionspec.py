from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum(str, Enum):
    PROMOTION_TYPE_UNSPECIFIED = "PROMOTION_TYPE_UNSPECIFIED"
    PROMOTION_TYPE_FREE_TRIAL = "PROMOTION_TYPE_FREE_TRIAL"
    PROMOTION_TYPE_INTRODUCTORY_PRICING = "PROMOTION_TYPE_INTRODUCTORY_PRICING"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec
    Describes the spec for one promotion.
    """
    
    free_trial_duration: Optional[GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialDuration') }})
    introductory_pricing_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingDetails') }})
    promotion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotion') }})
    type: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput
    Describes the spec for one promotion.
    """
    
    free_trial_duration: Optional[GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialDuration') }})
    introductory_pricing_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingDetails') }})
    promotion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotion') }})
    
