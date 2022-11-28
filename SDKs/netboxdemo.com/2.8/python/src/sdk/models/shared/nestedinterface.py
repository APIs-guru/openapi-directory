from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NestedInterfaceConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class NestedInterfaceConnectionStatus:
    label: NestedInterfaceConnectionStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class NestedInterface:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connection_status: Optional[NestedInterfaceConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    device: Optional[NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
