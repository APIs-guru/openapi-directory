from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WritableConsoleServerPortTypeEnum(str, Enum):
    DE_9 = "de-9"
    DB_25 = "db-25"
    RJ_11 = "rj-11"
    RJ_12 = "rj-12"
    RJ_45 = "rj-45"
    USB_A = "usb-a"
    USB_B = "usb-b"
    USB_C = "usb-c"
    USB_MINI_A = "usb-mini-a"
    USB_MINI_B = "usb-mini-b"
    USB_MICRO_A = "usb-micro-a"
    USB_MICRO_B = "usb-micro-b"
    OTHER = "other"


@dataclass_json
@dataclass
class WritableConsoleServerPortInput:
    device: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cable: Optional[NestedCableInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connection_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[WritableConsoleServerPortTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
