from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MembershipsDurationAtLevel:
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    member_since: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberSince') }})
    member_total_duration_months: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberTotalDurationMonths') }})
    
