from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation:
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    container_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerType' }})
    mapper_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapperId' }})
    mapper_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapperName' }})
    protocol_mapper: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocolMapper' }})
    
