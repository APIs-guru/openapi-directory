from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacatalogattribute

class GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum(str, Enum):
    ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
    PRODUCT_LEVEL_ATTRIBUTE_CONFIG = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
    CATALOG_LEVEL_ATTRIBUTE_CONFIG = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaAttributesConfig:
    attribute_config_level: Optional[GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeConfigLevel' }})
    catalog_attributes: Optional[dict[str, googlecloudretailv2betacatalogattribute.GoogleCloudRetailV2betaCatalogAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogAttributes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
