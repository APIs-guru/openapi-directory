from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkServiceChangeRequest:
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    product_offering: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_offering' }})
    
