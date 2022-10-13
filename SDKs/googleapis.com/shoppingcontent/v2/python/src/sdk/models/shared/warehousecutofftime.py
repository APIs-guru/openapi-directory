from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WarehouseCutoffTime:
    hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minute' }})
    
