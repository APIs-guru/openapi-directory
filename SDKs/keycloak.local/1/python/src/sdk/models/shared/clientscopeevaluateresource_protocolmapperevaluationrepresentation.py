from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation:
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    container_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerType') }})
    mapper_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapperId') }})
    mapper_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapperName') }})
    protocol_mapper: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocolMapper') }})
    
