from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BestSold:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    product_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_id' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_name' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
