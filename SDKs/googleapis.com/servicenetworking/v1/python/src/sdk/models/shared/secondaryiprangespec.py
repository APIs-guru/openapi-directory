from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecondaryIPRangeSpec:
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipPrefixLength' }})
    outside_allocation_public_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outsideAllocationPublicIpRange' }})
    range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeName' }})
    requested_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedAddress' }})
    
