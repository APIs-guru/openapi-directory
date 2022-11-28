from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IPAddressInterface:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    device: Optional[NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    virtual_machine: Optional[NestedVirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_machine') }})
    
