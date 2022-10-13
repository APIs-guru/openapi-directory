from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetFaucetResponseData:
    tx_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txId' }})
    

@dataclass_json
@dataclass
class GetFaucetResponse:
    data: Optional[GetFaucetResponseData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
