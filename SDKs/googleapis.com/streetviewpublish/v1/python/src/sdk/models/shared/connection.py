from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import photoid


@dataclass_json
@dataclass
class Connection:
    target: Optional[photoid.PhotoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
