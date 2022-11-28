from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1Catalog:
    r"""GoogleCloudRecommendationengineV1beta1Catalog
    The catalog configuration. Next ID: 5.
    """
    
    catalog_item_level_config: Optional[GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogItemLevelConfig') }})
    default_event_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultEventStoreId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
