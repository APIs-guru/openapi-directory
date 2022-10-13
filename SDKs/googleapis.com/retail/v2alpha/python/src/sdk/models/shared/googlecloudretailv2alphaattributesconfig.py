from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphacatalogattribute

class GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum(str, Enum):
    ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
    PRODUCT_LEVEL_ATTRIBUTE_CONFIG = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
    CATALOG_LEVEL_ATTRIBUTE_CONFIG = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaAttributesConfig:
    attribute_config_level: Optional[GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeConfigLevel' }})
    catalog_attributes: Optional[dict[str, googlecloudretailv2alphacatalogattribute.GoogleCloudRetailV2alphaCatalogAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogAttributes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
