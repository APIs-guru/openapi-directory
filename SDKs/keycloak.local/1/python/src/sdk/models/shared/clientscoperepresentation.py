from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import protocolmapperrepresentation


@dataclass_json
@dataclass
class ClientScopeRepresentation:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    protocol_mappers: Optional[List[protocolmapperrepresentation.ProtocolMapperRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocolMappers' }})
    
