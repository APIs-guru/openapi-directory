from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2interval
from . import googlecloudretailv2interval


@dataclass_json
@dataclass
class GoogleCloudRetailV2PriceInfoPriceRange:
    original_price: Optional[googlecloudretailv2interval.GoogleCloudRetailV2Interval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPrice' }})
    price: Optional[googlecloudretailv2interval.GoogleCloudRetailV2Interval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
