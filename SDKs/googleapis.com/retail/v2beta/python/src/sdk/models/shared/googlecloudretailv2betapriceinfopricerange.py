from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betainterval
from . import googlecloudretailv2betainterval


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaPriceInfoPriceRange:
    original_price: Optional[googlecloudretailv2betainterval.GoogleCloudRetailV2betaInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPrice' }})
    price: Optional[googlecloudretailv2betainterval.GoogleCloudRetailV2betaInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
