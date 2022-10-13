from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Links:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'First' }})
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Next' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prev' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Self' }})
    
