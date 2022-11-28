from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnpolicyCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    return_policy: Optional[ReturnPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicy') }})
    return_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicyId') }})
    
