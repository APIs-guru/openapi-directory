from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentMatrix:
    r"""EnvironmentMatrix
    The matrix of environments in which the test is to be executed.
    """
    
    android_device_list: Optional[AndroidDeviceList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDeviceList') }})
    android_matrix: Optional[AndroidMatrix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidMatrix') }})
    ios_device_list: Optional[IosDeviceList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosDeviceList') }})
    
