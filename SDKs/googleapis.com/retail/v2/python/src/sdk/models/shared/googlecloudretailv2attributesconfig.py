from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2catalogattribute

class GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum(str, Enum):
    ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
    PRODUCT_LEVEL_ATTRIBUTE_CONFIG = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
    CATALOG_LEVEL_ATTRIBUTE_CONFIG = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"


@dataclass_json
@dataclass
class GoogleCloudRetailV2AttributesConfig:
    attribute_config_level: Optional[GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeConfigLevel' }})
    catalog_attributes: Optional[dict[str, googlecloudretailv2catalogattribute.GoogleCloudRetailV2CatalogAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogAttributes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
