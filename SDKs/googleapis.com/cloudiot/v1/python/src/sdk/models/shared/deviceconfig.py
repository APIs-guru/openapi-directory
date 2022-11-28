from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceConfig:
    r"""DeviceConfig
    The device configuration. Eventually delivered to devices.
    """
    
    binary_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryData') }})
    cloud_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudUpdateTime') }})
    device_ack_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceAckTime') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
