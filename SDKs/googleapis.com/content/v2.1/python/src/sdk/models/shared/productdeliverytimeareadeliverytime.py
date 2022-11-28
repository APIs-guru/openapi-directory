from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductDeliveryTimeAreaDeliveryTime:
    r"""ProductDeliveryTimeAreaDeliveryTime
    A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.
    """
    
    delivery_area: Optional[DeliveryArea] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryArea') }})
    delivery_time: Optional[ProductDeliveryTimeAreaDeliveryTimeDeliveryTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryTime') }})
    
