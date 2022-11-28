from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ShippingShippingPricingModelEnum(str, Enum):
    FREE = "FREE"
    STANDARD = "STANDARD"


@dataclass_json
@dataclass
class Shipping:
    shipping_pricing_model: Optional[ShippingShippingPricingModelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingPricingModel') }})
    weight: Optional[Weight] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    weight_in_grams: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightInGrams') }})
    
