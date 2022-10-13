from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import forwardingaddress


@dataclass_json
@dataclass
class ListForwardingAddressesResponse:
    forwarding_addresses: Optional[List[forwardingaddress.ForwardingAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardingAddresses' }})
    
