from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum(str, Enum):
    ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
    PRODUCT_LEVEL_ATTRIBUTE_CONFIG = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
    CATALOG_LEVEL_ATTRIBUTE_CONFIG = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaAttributesConfig:
    r"""GoogleCloudRetailV2alphaAttributesConfig
    Catalog level attribute config.
    """
    
    attribute_config_level: Optional[GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeConfigLevel') }})
    catalog_attributes: Optional[dict[str, GoogleCloudRetailV2alphaCatalogAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogAttributes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
