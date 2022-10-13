from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regionorders


@dataclass_json
@dataclass
class CountryOrders:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    orders: Optional[List[regionorders.RegionOrders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orders' }})
    
