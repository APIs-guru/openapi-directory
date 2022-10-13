from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accounttaxtaxrule


@dataclass_json
@dataclass
class AccountTax:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    rules: Optional[List[accounttaxtaxrule.AccountTaxTaxRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
