from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductStatusDestinationStatus:
    approval_pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalPending') }})
    approval_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalStatus') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    intention: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intention') }})
    
