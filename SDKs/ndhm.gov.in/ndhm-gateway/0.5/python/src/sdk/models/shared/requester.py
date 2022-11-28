from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequesterIdentifier:
    system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Requester:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    identifier: Optional[RequesterIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    
