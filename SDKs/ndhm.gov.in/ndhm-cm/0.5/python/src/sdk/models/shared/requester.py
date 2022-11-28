from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequesterIdentifier:
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    

@dataclass_json
@dataclass
class Requester:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    identifier: Optional[RequesterIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    
