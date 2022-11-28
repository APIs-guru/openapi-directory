from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountStatusStatistics:
    active: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    disapproved: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disapproved') }})
    expiring: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiring') }})
    pending: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    
