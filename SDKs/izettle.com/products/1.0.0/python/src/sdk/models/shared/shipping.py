from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import weight

class ShippingShippingPricingModelEnum(str, Enum):
    FREE = "FREE"
    STANDARD = "STANDARD"


@dataclass_json
@dataclass
class Shipping:
    shipping_pricing_model: Optional[ShippingShippingPricingModelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingPricingModel' }})
    weight: Optional[weight.Weight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    weight_in_grams: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightInGrams' }})
    
