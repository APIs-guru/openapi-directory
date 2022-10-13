from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScopeMappingRepresentation:
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    client_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientScope' }})
    roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
