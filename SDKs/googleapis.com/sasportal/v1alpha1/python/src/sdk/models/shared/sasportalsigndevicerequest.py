from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SasPortalSignDeviceRequestInput:
    r"""SasPortalSignDeviceRequestInput
    Request for SignDevice.
    """
    
    device: Optional[SasPortalDeviceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    
