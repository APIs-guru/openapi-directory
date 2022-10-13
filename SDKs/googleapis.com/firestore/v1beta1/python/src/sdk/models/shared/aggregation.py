from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import count


@dataclass_json
@dataclass
class Aggregation:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    count: Optional[count.Count] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    
