from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import rolerepresentation


@dataclass_json
@dataclass
class RolesRepresentation:
    client: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    realm: Optional[List[rolerepresentation.RoleRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realm' }})
    
