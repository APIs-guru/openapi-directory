from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1catalogitem


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1CatalogInlineSource:
    catalog_items: Optional[List[googlecloudrecommendationenginev1beta1catalogitem.GoogleCloudRecommendationengineV1beta1CatalogItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogItems' }})
    
