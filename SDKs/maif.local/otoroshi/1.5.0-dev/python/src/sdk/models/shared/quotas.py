from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Quotas:
    authorized_calls_per_day: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedCallsPerDay' }})
    authorized_calls_per_month: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedCallsPerMonth' }})
    authorized_calls_per_sec: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedCallsPerSec' }})
    current_calls_per_day: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentCallsPerDay' }})
    current_calls_per_month: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentCallsPerMonth' }})
    current_calls_per_sec: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentCallsPerSec' }})
    remaining_calls_per_day: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingCallsPerDay' }})
    remaining_calls_per_month: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingCallsPerMonth' }})
    remaining_calls_per_sec: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingCallsPerSec' }})
    
