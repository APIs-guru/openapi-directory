from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifySubaccountRequest:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended') }})
    use_primary_account_balance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_primary_account_balance') }})
    
