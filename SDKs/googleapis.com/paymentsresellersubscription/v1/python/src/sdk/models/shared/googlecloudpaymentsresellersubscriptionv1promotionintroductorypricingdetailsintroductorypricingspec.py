from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec:
    r"""GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec
    The duration of an introductory pricing promotion.
    """
    
    discount_amount: Optional[GoogleCloudPaymentsResellerSubscriptionV1Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    discount_ratio_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountRatioMicros') }})
    recurrence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrenceCount') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    

@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput
    The duration of an introductory pricing promotion.
    """
    
    discount_amount: Optional[GoogleCloudPaymentsResellerSubscriptionV1Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    
