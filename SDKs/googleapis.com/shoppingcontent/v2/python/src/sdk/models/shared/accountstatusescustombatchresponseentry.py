from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountstatusesCustomBatchResponseEntry:
    r"""AccountstatusesCustomBatchResponseEntry
    A batch entry encoding a single non-batch accountstatuses response.
    """
    
    account_status: Optional[AccountStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountStatus') }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[Errors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
