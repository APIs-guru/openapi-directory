from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddNamedRangeRequest:
    r"""AddNamedRangeRequest
    Adds a named range to the spreadsheet.
    """
    
    named_range: Optional[NamedRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRange') }})
    
