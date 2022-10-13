from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import location
from . import location


@dataclass_json
@dataclass
class MoveItemRequest:
    new_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newLocation' }})
    original_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalLocation' }})
    
