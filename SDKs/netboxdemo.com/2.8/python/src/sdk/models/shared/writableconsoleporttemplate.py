from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableConsolePortTemplateTypeEnum(str, Enum):
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
class WritableConsolePortTemplateInput:
    device_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[WritableConsolePortTemplateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
