from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FixedOrPercent:
    r"""FixedOrPercent
    Message encapsulating a value that can be either absolute (\"fixed\") or relative (\"percent\") to a value.
    """
    
    fixed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed') }})
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    
