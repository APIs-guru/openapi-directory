from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import returnaddress


@dataclass_json
@dataclass
class ReturnaddressCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    return_address: Optional[returnaddress.ReturnAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnAddress' }})
    return_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnAddressId' }})
    
