from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum(str, Enum):
    ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
    PRODUCT_LEVEL_ATTRIBUTE_CONFIG = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
    CATALOG_LEVEL_ATTRIBUTE_CONFIG = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"


@dataclass_json
@dataclass
class GoogleCloudRetailV2AttributesConfig:
    r"""GoogleCloudRetailV2AttributesConfig
    Catalog level attribute config.
    """
    
    attribute_config_level: Optional[GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeConfigLevel') }})
    catalog_attributes: Optional[dict[str, GoogleCloudRetailV2CatalogAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogAttributes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
