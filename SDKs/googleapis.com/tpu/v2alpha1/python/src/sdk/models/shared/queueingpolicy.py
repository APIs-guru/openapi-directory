from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueueingPolicy:
    r"""QueueingPolicy
    Defines the policy of the QueuedRequest.
    """
    
    valid_after_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAfterDuration') }})
    valid_after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAfterTime') }})
    valid_interval: Optional[Interval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validInterval') }})
    valid_until_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntilDuration') }})
    valid_until_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntilTime') }})
    
