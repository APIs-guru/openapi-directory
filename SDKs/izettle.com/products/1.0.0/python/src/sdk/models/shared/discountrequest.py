from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class DiscountRequest:
    amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    external_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalReference' }})
    image_lookup_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLookupKeys' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    
