from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1featuremap

class GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum(str, Enum):
    STOCK_STATE_UNSPECIFIED = "STOCK_STATE_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    PREORDER = "PREORDER"
    BACKORDER = "BACKORDER"


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ProductDetail:
    available_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableQuantity' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    display_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayPrice' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item_attributes: Optional[googlecloudrecommendationenginev1beta1featuremap.GoogleCloudRecommendationengineV1beta1FeatureMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemAttributes' }})
    original_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPrice' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    stock_state: Optional[GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stockState' }})
    
