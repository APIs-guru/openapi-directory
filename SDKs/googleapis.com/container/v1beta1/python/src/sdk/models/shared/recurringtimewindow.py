from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecurringTimeWindow:
    r"""RecurringTimeWindow
    Represents an arbitrary window of time that recurs.
    """
    
    recurrence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    window: Optional[TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    
