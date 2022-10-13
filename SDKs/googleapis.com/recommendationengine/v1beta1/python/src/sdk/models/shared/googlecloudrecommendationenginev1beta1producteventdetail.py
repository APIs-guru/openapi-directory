from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy
from . import googlecloudrecommendationenginev1beta1productdetail
from . import googlecloudrecommendationenginev1beta1purchasetransaction


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ProductEventDetail:
    cart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cartId' }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listId' }})
    page_categories: Optional[List[googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCategories' }})
    product_details: Optional[List[googlecloudrecommendationenginev1beta1productdetail.GoogleCloudRecommendationengineV1beta1ProductDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productDetails' }})
    purchase_transaction: Optional[googlecloudrecommendationenginev1beta1purchasetransaction.GoogleCloudRecommendationengineV1beta1PurchaseTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseTransaction' }})
    search_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchQuery' }})
    
