from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betamerchantcenterlinkingconfig
from . import googlecloudretailv2betaproductlevelconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCatalog:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    merchant_center_linking_config: Optional[googlecloudretailv2betamerchantcenterlinkingconfig.GoogleCloudRetailV2betaMerchantCenterLinkingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCenterLinkingConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_level_config: Optional[googlecloudretailv2betaproductlevelconfig.GoogleCloudRetailV2betaProductLevelConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productLevelConfig' }})
    
