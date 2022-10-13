from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class ProductSubscriptionCost:
    amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    period_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodLength' }})
    
