from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1catalogitemlevelconfig


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1Catalog:
    catalog_item_level_config: Optional[googlecloudrecommendationenginev1beta1catalogitemlevelconfig.GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogItemLevelConfig' }})
    default_event_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultEventStoreId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
