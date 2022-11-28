from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OsPolicyResourceFileResourceStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    CONTENTS_MATCH = "CONTENTS_MATCH"


@dataclass_json
@dataclass
class OsPolicyResourceFileResource:
    r"""OsPolicyResourceFileResource
    A resource that manages the state of a file.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    file: Optional[OsPolicyResourceFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    permissions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    state: Optional[OsPolicyResourceFileResourceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
