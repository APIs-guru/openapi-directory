from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1Sku:
    r"""GoogleCloudChannelV1Sku
    Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
    """
    
    marketing_info: Optional[GoogleCloudChannelV1MarketingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product: Optional[GoogleCloudChannelV1Product] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    
