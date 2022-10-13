from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price
from . import price


@dataclass_json
@dataclass
class OrderLineItemAdjustment:
    price_adjustment: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceAdjustment' }})
    tax_adjustment: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAdjustment' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
