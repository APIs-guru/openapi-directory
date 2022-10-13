from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails:
    introductory_pricing_specs: Optional[List[googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introductoryPricingSpecs' }})
    
