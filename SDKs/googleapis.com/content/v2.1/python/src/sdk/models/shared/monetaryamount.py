from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price
from . import price


@dataclass_json
@dataclass
class MonetaryAmount:
    price_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceAmount' }})
    tax_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAmount' }})
    
