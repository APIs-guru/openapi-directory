from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeviceIPBlockFormEnum(str, Enum):
    DEVICE_FORM_UNSPECIFIED = "DEVICE_FORM_UNSPECIFIED"
    VIRTUAL = "VIRTUAL"
    PHYSICAL = "PHYSICAL"
    EMULATOR = "EMULATOR"


@dataclass_json
@dataclass
class DeviceIPBlock:
    r"""DeviceIPBlock
    A single device IP block
    """
    
    added_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedDate') }})
    block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    form: Optional[DeviceIPBlockFormEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    
