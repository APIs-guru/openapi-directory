from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConsoleServerPortTemplateTypeLabelEnum(str, Enum):
    DE_9 = "DE-9"
    DB_25 = "DB-25"
    RJ_11 = "RJ-11"
    RJ_12 = "RJ-12"
    RJ_45 = "RJ-45"
    USB_TYPE_A = "USB Type A"
    USB_TYPE_B = "USB Type B"
    USB_TYPE_C = "USB Type C"
    USB_MINI_A = "USB Mini A"
    USB_MINI_B = "USB Mini B"
    USB_MICRO_A = "USB Micro A"
    USB_MICRO_B = "USB Micro B"
    OTHER = "Other"

class ConsoleServerPortTemplateTypeValueEnum(str, Enum):
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
class ConsoleServerPortTemplateType:
    label: ConsoleServerPortTemplateTypeLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: ConsoleServerPortTemplateTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ConsoleServerPortTemplate:
    device_type: NestedDeviceType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[ConsoleServerPortTemplateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
