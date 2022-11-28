from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegularFile:
    r"""RegularFile
    A file or directory to install on the device before the test starts.
    """
    
    content: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    device_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePath') }})
    
