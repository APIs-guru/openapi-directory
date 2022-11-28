from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceFile:
    r"""DeviceFile
    A single device file description.
    """
    
    obb_file: Optional[ObbFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obbFile') }})
    regular_file: Optional[RegularFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularFile') }})
    
