from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import storestats


@dataclass_json
@dataclass
class Type:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    stats: Optional[storestats.StoreStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
