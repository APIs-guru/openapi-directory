from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig
    Configures the catalog level that users send events to, and the level at which predictions are made.
    """
    
    event_item_level: Optional[GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventItemLevel') }})
    predict_item_level: Optional[GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictItemLevel') }})
    
