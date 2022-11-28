from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaPriceInfoPriceRange:
    r"""GoogleCloudRetailV2alphaPriceInfoPriceRange
    The price range of all variant Product having the same Product.primary_product_id.
    """
    
    original_price: Optional[GoogleCloudRetailV2alphaInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPrice') }})
    price: Optional[GoogleCloudRetailV2alphaInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
