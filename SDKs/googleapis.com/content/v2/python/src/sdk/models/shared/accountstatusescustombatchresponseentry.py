from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountstatus
from . import errors


@dataclass_json
@dataclass
class AccountstatusesCustomBatchResponseEntry:
    account_status: Optional[accountstatus.AccountStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountStatus' }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
