from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1PurchasableSku:
    r"""GoogleCloudChannelV1PurchasableSku
    SKU that you can purchase. This is used in ListPurchasableSku API response.
    """
    
    sku: Optional[GoogleCloudChannelV1Sku] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    
