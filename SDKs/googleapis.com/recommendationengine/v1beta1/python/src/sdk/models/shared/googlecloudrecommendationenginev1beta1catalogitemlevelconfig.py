from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum(str, Enum):
    CATALOG_ITEM_LEVEL_UNSPECIFIED = "CATALOG_ITEM_LEVEL_UNSPECIFIED"
    VARIANT = "VARIANT"
    MASTER = "MASTER"

class GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum(str, Enum):
    CATALOG_ITEM_LEVEL_UNSPECIFIED = "CATALOG_ITEM_LEVEL_UNSPECIFIED"
    VARIANT = "VARIANT"
    MASTER = "MASTER"


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig:
    event_item_level: Optional[GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventItemLevel' }})
    predict_item_level: Optional[GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictItemLevel' }})
    
