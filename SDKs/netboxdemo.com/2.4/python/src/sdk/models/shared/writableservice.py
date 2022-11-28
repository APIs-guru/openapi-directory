from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableServiceInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    device: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    ipaddresses: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipaddresses') }})
    virtual_machine: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_machine') }})
    
