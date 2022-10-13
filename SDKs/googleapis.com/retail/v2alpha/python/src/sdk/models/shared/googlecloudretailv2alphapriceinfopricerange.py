from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphainterval
from . import googlecloudretailv2alphainterval


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaPriceInfoPriceRange:
    original_price: Optional[googlecloudretailv2alphainterval.GoogleCloudRetailV2alphaInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPrice' }})
    price: Optional[googlecloudretailv2alphainterval.GoogleCloudRetailV2alphaInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
