from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrdersData:
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'average' }})
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    paid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paid' }})
    pending: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
