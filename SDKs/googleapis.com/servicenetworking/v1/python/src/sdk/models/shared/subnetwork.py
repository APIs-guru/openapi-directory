from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secondaryiprange


@dataclass_json
@dataclass
class Subnetwork:
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipCidrRange' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    outside_allocation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outsideAllocation' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    secondary_ip_ranges: Optional[List[secondaryiprange.SecondaryIPRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryIpRanges' }})
    
