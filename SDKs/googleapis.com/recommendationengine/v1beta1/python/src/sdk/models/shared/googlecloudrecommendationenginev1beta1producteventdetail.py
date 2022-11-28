from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ProductEventDetail:
    r"""GoogleCloudRecommendationengineV1beta1ProductEventDetail
    ProductEventDetail captures user event information specific to retail products.
    """
    
    cart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cartId') }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listId') }})
    page_categories: Optional[List[GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCategories') }})
    product_details: Optional[List[GoogleCloudRecommendationengineV1beta1ProductDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productDetails') }})
    purchase_transaction: Optional[GoogleCloudRecommendationengineV1beta1PurchaseTransaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseTransaction') }})
    search_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchQuery') }})
    
