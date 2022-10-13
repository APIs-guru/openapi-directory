from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice:
    display_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayPrice' }})
    original_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPrice' }})
    
