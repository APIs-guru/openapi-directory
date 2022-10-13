from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betapriceinfopricerange


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaPriceInfo:
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    original_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPrice' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_effective_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceEffectiveTime' }})
    price_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceExpireTime' }})
    price_range: Optional[googlecloudretailv2betapriceinfopricerange.GoogleCloudRetailV2betaPriceInfoPriceRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceRange' }})
    
