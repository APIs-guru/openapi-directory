from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAddressResponse:
    addr_str: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addrStr' }})
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    balance_sat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceSat' }})
    total_received: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalReceived' }})
    total_received_sat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalReceivedSat' }})
    total_sent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSent' }})
    total_sent_sat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSentSat' }})
    transactions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    tx_appearances: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txAppearances' }})
    unconfirmed_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unconfirmedBalance' }})
    unconfirmed_balance_sat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unconfirmedBalanceSat' }})
    unconfirmed_tx_appearances: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unconfirmedTxAppearances' }})
    
