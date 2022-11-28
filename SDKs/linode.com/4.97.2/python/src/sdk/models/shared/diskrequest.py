from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiskRequest:
    r"""DiskRequest
    Disk object request.
    """
    
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    authorized_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_keys') }})
    authorized_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_users') }})
    filesystem: Optional[FilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesystem') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    root_pass: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_pass') }})
    stackscript_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackscript_data') }})
    stackscript_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackscript_id') }})
    
