from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1CatalogItem:
    r"""GoogleCloudRecommendationengineV1beta1CatalogItem
    CatalogItem captures all metadata information of items to be recommended.
    """
    
    category_hierarchies: Optional[List[GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryHierarchies') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item_attributes: Optional[GoogleCloudRecommendationengineV1beta1FeatureMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemAttributes') }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupId') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    product_metadata: Optional[GoogleCloudRecommendationengineV1beta1ProductCatalogItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productMetadata') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
