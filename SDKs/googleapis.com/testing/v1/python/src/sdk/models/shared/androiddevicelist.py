from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AndroidDeviceList:
    r"""AndroidDeviceList
    A list of Android device configurations in which the test is to be executed.
    """
    
    android_devices: Optional[List[AndroidDevice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDevices') }})
    
