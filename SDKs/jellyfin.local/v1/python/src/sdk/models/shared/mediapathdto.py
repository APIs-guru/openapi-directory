from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MediaPathDto:
    r"""MediaPathDto
    Media Path dto.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    path_info: Optional[MediaPathInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathInfo') }})
    
