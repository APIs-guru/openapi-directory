from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig:
    r"""GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig
    Configs the prices in an available region.
    """
    
    amount: Optional[GoogleCloudPaymentsResellerSubscriptionV1Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
