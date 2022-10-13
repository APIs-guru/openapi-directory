from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import rolerepresentation


@dataclass_json
@dataclass
class MappingsRepresentation:
    client_mappings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientMappings' }})
    realm_mappings: Optional[List[rolerepresentation.RoleRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realmMappings' }})
    
