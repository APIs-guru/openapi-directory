from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BooleanRule:
    r"""BooleanRule
    A rule that may or may not match, depending on the condition.
    """
    
    condition: Optional[BooleanCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    format: Optional[CellFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    
