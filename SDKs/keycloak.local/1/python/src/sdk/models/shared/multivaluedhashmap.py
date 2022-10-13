from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MultivaluedHashMap:
    empty: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'empty' }})
    load_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadFactor' }})
    threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threshold' }})
    
