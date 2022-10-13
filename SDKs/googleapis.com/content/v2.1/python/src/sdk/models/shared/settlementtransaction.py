from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import settlementtransactionamount
from . import settlementtransactionidentifiers
from . import settlementtransactiontransaction


@dataclass_json
@dataclass
class SettlementTransaction:
    amount: Optional[settlementtransactionamount.SettlementTransactionAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    identifiers: Optional[settlementtransactionidentifiers.SettlementTransactionIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    transaction: Optional[settlementtransactiontransaction.SettlementTransactionTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
