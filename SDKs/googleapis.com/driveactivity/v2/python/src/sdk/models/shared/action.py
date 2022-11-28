from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    Information about the action.
    """
    
    actor: Optional[Actor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    detail: Optional[ActionDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    target: Optional[Target] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    time_range: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
