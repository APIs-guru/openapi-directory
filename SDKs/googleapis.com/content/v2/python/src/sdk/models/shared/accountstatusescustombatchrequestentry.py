from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountstatusesCustomBatchRequestEntry:
    r"""AccountstatusesCustomBatchRequestEntry
    A batch entry encoding a single non-batch accountstatuses request.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
