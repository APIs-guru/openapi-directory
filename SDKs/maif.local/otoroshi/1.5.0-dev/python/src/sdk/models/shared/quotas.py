from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Quotas:
    r"""Quotas
    Quotas state for an api key on a service group
    """
    
    authorized_calls_per_day: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedCallsPerDay') }})
    authorized_calls_per_month: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedCallsPerMonth') }})
    authorized_calls_per_sec: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedCallsPerSec') }})
    current_calls_per_day: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentCallsPerDay') }})
    current_calls_per_month: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentCallsPerMonth') }})
    current_calls_per_sec: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentCallsPerSec') }})
    remaining_calls_per_day: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingCallsPerDay') }})
    remaining_calls_per_month: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingCallsPerMonth') }})
    remaining_calls_per_sec: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingCallsPerSec') }})
    
