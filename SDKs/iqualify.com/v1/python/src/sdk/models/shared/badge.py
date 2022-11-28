from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Badge:
    badge_expiry: Optional[BadgeExpiry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeExpiry') }})
    badge_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeUrl') }})
    criterias: Optional[Criteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criterias') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    open_badge: Optional[OpenBadgeClass] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openBadge') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
