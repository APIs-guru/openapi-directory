from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Quota:
    r"""Quota
    Represents a quota
    """
    
    time_until_reset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUntilReset') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Total') }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Used') }})
    
