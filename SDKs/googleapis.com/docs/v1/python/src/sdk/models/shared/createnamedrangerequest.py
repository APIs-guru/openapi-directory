from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateNamedRangeRequest:
    r"""CreateNamedRangeRequest
    Creates a NamedRange referencing the given range.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
