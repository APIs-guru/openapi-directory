from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountreference16_ch
from . import balance


@dataclass_json
@dataclass
class ReadAccountBalanceResponse200:
    account: Optional[accountreference16_ch.AccountReference16Ch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    balances: List[balance.Balance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balances' }})
    
