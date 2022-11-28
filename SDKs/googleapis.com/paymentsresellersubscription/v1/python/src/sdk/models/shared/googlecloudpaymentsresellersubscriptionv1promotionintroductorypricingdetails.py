from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails:
    r"""GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails
    The details of a introductory pricing promotion.
    """
    
    introductory_pricing_specs: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingSpecs') }})
    

@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput
    The details of a introductory pricing promotion.
    """
    
    introductory_pricing_specs: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingSpecs') }})
    
