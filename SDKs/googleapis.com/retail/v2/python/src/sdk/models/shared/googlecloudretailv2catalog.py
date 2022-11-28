from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2Catalog:
    r"""GoogleCloudRetailV2Catalog
    The catalog configuration.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_level_config: Optional[GoogleCloudRetailV2ProductLevelConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productLevelConfig') }})
    
