from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderCustomerLoyaltyInfo:
    loyalty_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyaltyNumber' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
