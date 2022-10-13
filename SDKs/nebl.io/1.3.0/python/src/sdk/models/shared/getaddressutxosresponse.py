from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAddressUtxosResponse:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    confirmations: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmations' }})
    script_pub_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptPubKey' }})
    ts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ts' }})
    txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    vout: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vout' }})
    
