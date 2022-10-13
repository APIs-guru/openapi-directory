from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1productpriceconfig
from . import googlecloudpaymentsresellersubscriptionv1duration
from . import googletypelocalizedtext


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Product:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    price_configs: Optional[List[googlecloudpaymentsresellersubscriptionv1productpriceconfig.GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceConfigs' }})
    region_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCodes' }})
    subscription_billing_cycle_duration: Optional[googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionBillingCycleDuration' }})
    titles: Optional[List[googletypelocalizedtext.GoogleTypeLocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titles' }})
    
