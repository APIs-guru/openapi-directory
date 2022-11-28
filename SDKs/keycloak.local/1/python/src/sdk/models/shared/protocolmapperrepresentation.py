from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProtocolMapperRepresentation:
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    protocol_mapper: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocolMapper') }})
    
