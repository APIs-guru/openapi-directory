from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InterfaceConnectionConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class InterfaceConnectionConnectionStatus:
    label: InterfaceConnectionConnectionStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class InterfaceConnection:
    interface_b: NestedInterface = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_b') }})
    connection_status: Optional[InterfaceConnectionConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    interface_a: Optional[NestedInterface] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_a') }})
    
