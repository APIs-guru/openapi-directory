from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    The environment in which the test is run.
    """
    
    android_device: Optional[AndroidDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDevice') }})
    ios_device: Optional[IosDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosDevice') }})
    
