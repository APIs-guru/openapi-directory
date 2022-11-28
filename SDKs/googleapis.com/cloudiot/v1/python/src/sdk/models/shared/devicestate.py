from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceState:
    r"""DeviceState
    The device state, as reported by the device.
    """
    
    binary_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryData') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
