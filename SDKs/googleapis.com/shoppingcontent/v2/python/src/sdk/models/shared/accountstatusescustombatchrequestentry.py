from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountstatusesCustomBatchRequestEntry:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    
