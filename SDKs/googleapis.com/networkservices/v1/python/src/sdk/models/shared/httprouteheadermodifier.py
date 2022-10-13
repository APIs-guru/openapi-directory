from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPRouteHeaderModifier:
    add: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remove' }})
    set: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'set' }})
    
