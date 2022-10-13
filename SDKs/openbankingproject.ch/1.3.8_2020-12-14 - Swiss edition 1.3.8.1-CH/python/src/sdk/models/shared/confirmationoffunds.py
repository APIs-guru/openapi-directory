from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountreference16_ch
from . import amount


@dataclass_json
@dataclass
class ConfirmationOfFunds:
    account: accountreference16_ch.AccountReference16Ch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    card_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardNumber' }})
    instructed_amount: amount.Amount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructedAmount' }})
    payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee' }})
    
