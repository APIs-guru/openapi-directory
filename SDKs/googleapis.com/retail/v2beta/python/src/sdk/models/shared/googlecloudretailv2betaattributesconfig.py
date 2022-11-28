from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum(str, Enum):
    ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
    PRODUCT_LEVEL_ATTRIBUTE_CONFIG = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
    CATALOG_LEVEL_ATTRIBUTE_CONFIG = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaAttributesConfig:
    r"""GoogleCloudRetailV2betaAttributesConfig
    Catalog level attribute config.
    """
    
    attribute_config_level: Optional[GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeConfigLevel') }})
    catalog_attributes: Optional[dict[str, GoogleCloudRetailV2betaCatalogAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogAttributes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
