from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectaccesscontrol


@dataclass_json
@dataclass
class ObjectAccessControls:
    items: Optional[List[objectaccesscontrol.ObjectAccessControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
