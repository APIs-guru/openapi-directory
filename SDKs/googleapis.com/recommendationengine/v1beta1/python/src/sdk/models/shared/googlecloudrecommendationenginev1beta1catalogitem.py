from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy
from . import googlecloudrecommendationenginev1beta1featuremap
from . import googlecloudrecommendationenginev1beta1productcatalogitem


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1CatalogItem:
    category_hierarchies: Optional[List[googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryHierarchies' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item_attributes: Optional[googlecloudrecommendationenginev1beta1featuremap.GoogleCloudRecommendationengineV1beta1FeatureMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemAttributes' }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupId' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    product_metadata: Optional[googlecloudrecommendationenginev1beta1productcatalogitem.GoogleCloudRecommendationengineV1beta1ProductCatalogItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productMetadata' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
