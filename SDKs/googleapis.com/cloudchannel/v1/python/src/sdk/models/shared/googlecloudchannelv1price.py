from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1Price:
    r"""GoogleCloudChannelV1Price
    Represents the price of the Offer.
    """
    
    base_price: Optional[GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePrice') }})
    discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    effective_price: Optional[GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectivePrice') }})
    external_price_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalPriceUri') }})
    
