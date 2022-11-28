from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaPriceInfo:
    r"""GoogleCloudRetailV2alphaPriceInfo
    The price information of a Product.
    """
    
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    original_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPrice') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_effective_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceEffectiveTime') }})
    price_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceExpireTime') }})
    price_range: Optional[GoogleCloudRetailV2alphaPriceInfoPriceRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceRange') }})
    
