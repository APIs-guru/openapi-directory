from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1productcatalogitemexactprice
from . import googlecloudrecommendationenginev1beta1image
from . import googlecloudrecommendationenginev1beta1productcatalogitempricerange

class GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum(str, Enum):
    STOCK_STATE_UNSPECIFIED = "STOCK_STATE_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    PREORDER = "PREORDER"
    BACKORDER = "BACKORDER"


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ProductCatalogItem:
    available_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableQuantity' }})
    canonical_product_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalProductUri' }})
    costs: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costs' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    exact_price: Optional[googlecloudrecommendationenginev1beta1productcatalogitemexactprice.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactPrice' }})
    images: Optional[List[googlecloudrecommendationenginev1beta1image.GoogleCloudRecommendationengineV1beta1Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    price_range: Optional[googlecloudrecommendationenginev1beta1productcatalogitempricerange.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceRange' }})
    stock_state: Optional[GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stockState' }})
    
