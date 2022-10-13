from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphamerchantcenterlinkingconfig
from . import googlecloudretailv2alphaproductlevelconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCatalog:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    merchant_center_linking_config: Optional[googlecloudretailv2alphamerchantcenterlinkingconfig.GoogleCloudRetailV2alphaMerchantCenterLinkingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCenterLinkingConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_level_config: Optional[googlecloudretailv2alphaproductlevelconfig.GoogleCloudRetailV2alphaProductLevelConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productLevelConfig' }})
    
