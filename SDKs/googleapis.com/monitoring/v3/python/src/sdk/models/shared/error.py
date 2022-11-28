from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Error:
    r"""Error
    Detailed information about an error category.
    """
    
    point_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointCount') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
