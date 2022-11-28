from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Create:
    r"""Create
    An object was created.
    """
    
    copy: Optional[Copy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy') }})
    new: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new') }})
    upload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    
