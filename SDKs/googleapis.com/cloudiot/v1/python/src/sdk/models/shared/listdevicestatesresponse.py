from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDeviceStatesResponse:
    r"""ListDeviceStatesResponse
    Response for `ListDeviceStates`.
    """
    
    device_states: Optional[List[DeviceState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceStates') }})
    
