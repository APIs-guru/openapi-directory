from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum(str, Enum):
    STOCK_STATE_UNSPECIFIED = "STOCK_STATE_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    PREORDER = "PREORDER"
    BACKORDER = "BACKORDER"


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ProductCatalogItem:
    r"""GoogleCloudRecommendationengineV1beta1ProductCatalogItem
    ProductCatalogItem captures item metadata specific to retail products.
    """
    
    available_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableQuantity') }})
    canonical_product_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalProductUri') }})
    costs: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costs') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    exact_price: Optional[GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactPrice') }})
    images: Optional[List[GoogleCloudRecommendationengineV1beta1Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    price_range: Optional[GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceRange') }})
    stock_state: Optional[GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stockState') }})
    
