from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shippingmethodfields


@dataclass_json
@dataclass
class ShippingMethod:
    shipping_method: Optional[shippingmethodfields.ShippingMethodFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_method' }})
    
