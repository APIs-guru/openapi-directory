from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductDeliveryTime:
    r"""ProductDeliveryTime
    The estimated days to deliver a product after an order is placed. Only authorized shipping signals partners working with a merchant can use this resource. Merchants should use the [`products`](https://developers.google.com/shopping-content/reference/rest/v2.1/products#productshipping) resource instead.
    """
    
    area_delivery_times: Optional[List[ProductDeliveryTimeAreaDeliveryTime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaDeliveryTimes') }})
    product_id: Optional[ProductID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
