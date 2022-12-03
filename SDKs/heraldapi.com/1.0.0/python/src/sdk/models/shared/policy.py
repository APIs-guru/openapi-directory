from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PolicyStatusEnum(str, Enum):
    PENDING = "pending"
    UNDER_REVIEW = "under_review"
    ACTIVE = "active"
    EXPIRED = "expired"
    CANCELLED = "cancelled"
    UNRESPONSIVE = "unresponsive"


@dataclass_json
@dataclass
class Policy:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    portal_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portal_link') }})
    quote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote_id') }})
    status: Optional[PolicyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
