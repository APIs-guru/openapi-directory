from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price
from . import price
from . import price


@dataclass_json
@dataclass
class ProductAmount:
    price_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceAmount' }})
    remitted_tax_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remittedTaxAmount' }})
    tax_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAmount' }})
    
