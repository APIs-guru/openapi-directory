from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCatalog:
    r"""GoogleCloudRetailV2betaCatalog
    The catalog configuration.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    merchant_center_linking_config: Optional[GoogleCloudRetailV2betaMerchantCenterLinkingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantCenterLinkingConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_level_config: Optional[GoogleCloudRetailV2betaProductLevelConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productLevelConfig') }})
    
