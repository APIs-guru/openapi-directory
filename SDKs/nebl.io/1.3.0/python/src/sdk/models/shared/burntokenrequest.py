from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BurnTokenRequestBurn:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenId' }})
    

@dataclass_json
@dataclass
class BurnTokenRequestTransfer:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenId' }})
    

@dataclass_json
@dataclass
class BurnTokenRequest:
    burn: List[BurnTokenRequestBurn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'burn' }})
    fee: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fee' }})
    from_: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    transfer: Optional[List[BurnTokenRequestTransfer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer' }})
    
