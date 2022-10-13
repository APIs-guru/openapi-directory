from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price
from . import price


@dataclass_json
@dataclass
class SettlementReport:
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    previous_balance: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousBalance' }})
    settlement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settlementId' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    transfer_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferAmount' }})
    transfer_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferDate' }})
    transfer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferIds' }})
    
