from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usablesubnetworksecondaryrange


@dataclass_json
@dataclass
class UsableSubnetwork:
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipCidrRange' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    secondary_ip_ranges: Optional[List[usablesubnetworksecondaryrange.UsableSubnetworkSecondaryRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryIpRanges' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    
