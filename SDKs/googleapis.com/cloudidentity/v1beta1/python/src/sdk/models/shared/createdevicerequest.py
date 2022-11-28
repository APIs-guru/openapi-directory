from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDeviceRequestInput:
    r"""CreateDeviceRequestInput
    Request message for creating a Company Owned device.
    """
    
    device: Optional[DeviceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    
