from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class Value:
    carrier_rate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierRateName' }})
    flat_rate: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flatRate' }})
    no_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noShipping' }})
    price_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricePercentage' }})
    subtable_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtableName' }})
    
