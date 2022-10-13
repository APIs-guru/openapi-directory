from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locationidset
from . import price
from . import weight


@dataclass_json
@dataclass
class Headers:
    locations: Optional[List[locationidset.LocationIDSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    number_of_items: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfItems' }})
    postal_code_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodeGroupNames' }})
    prices: Optional[List[price.Price]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    weights: Optional[List[weight.Weight]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weights' }})
    
