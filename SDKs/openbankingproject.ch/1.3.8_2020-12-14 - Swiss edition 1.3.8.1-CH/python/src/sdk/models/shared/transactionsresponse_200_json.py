from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import accountreference16_ch
from . import balance
from . import accountreport


@dataclass_json
@dataclass
class TransactionsResponse200JSON:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account: Optional[accountreference16_ch.AccountReference16Ch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    balances: Optional[List[balance.Balance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balances' }})
    transactions: Optional[accountreport.AccountReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
