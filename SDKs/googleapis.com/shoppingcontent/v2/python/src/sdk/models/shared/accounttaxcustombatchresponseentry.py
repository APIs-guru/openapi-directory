from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accounttax
from . import errors


@dataclass_json
@dataclass
class AccounttaxCustomBatchResponseEntry:
    account_tax: Optional[accounttax.AccountTax] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountTax' }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
