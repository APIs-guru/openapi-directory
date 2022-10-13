from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import settlementtransactionamountcommission
from . import price


@dataclass_json
@dataclass
class SettlementTransactionAmount:
    commission: Optional[settlementtransactionamountcommission.SettlementTransactionAmountCommission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commission' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    transaction_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionAmount' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
