from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import date

class DeviceIPBlockFormEnum(str, Enum):
    DEVICE_FORM_UNSPECIFIED = "DEVICE_FORM_UNSPECIFIED"
    VIRTUAL = "VIRTUAL"
    PHYSICAL = "PHYSICAL"
    EMULATOR = "EMULATOR"


@dataclass_json
@dataclass
class DeviceIPBlock:
    added_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedDate' }})
    block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    form: Optional[DeviceIPBlockFormEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    
