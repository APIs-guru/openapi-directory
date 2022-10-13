from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clustercustomeraddress


@dataclass_json
@dataclass
class ClusterCustomer:
    address: Optional[clustercustomeraddress.ClusterCustomerAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    
