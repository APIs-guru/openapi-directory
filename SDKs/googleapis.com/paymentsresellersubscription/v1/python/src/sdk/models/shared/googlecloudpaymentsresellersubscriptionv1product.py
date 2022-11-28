from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Product:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Product
    A Product resource that defines a subscription service that can be resold.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    price_configs: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceConfigs') }})
    region_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCodes') }})
    subscription_billing_cycle_duration: Optional[GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionBillingCycleDuration') }})
    titles: Optional[List[GoogleTypeLocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titles') }})
    
