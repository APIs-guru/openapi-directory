from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InterfaceConnectionConnectionStatus:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class InterfaceConnection:
    interface_a: NestedInterface = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_a') }})
    interface_b: NestedInterface = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_b') }})
    connection_status: Optional[InterfaceConnectionConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
