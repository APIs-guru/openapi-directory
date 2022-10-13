from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accounttax


@dataclass_json
@dataclass
class AccounttaxCustomBatchRequestEntry:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    account_tax: Optional[accounttax.AccountTax] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountTax' }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    
