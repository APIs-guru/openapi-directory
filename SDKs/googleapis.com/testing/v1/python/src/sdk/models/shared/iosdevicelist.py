from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IosDeviceList:
    r"""IosDeviceList
    A list of iOS device configurations in which the test is to be executed.
    """
    
    ios_devices: Optional[List[IosDevice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosDevices') }})
    
