from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import item
from . import location


@dataclass_json
@dataclass
class CreateItemRequest:
    item: Optional[item.Item] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    
