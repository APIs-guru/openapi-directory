from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPAllocationPolicy:
    cluster_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterIpv4CidrBlock' }})
    cluster_secondary_range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterSecondaryRangeName' }})
    services_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicesIpv4CidrBlock' }})
    services_secondary_range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicesSecondaryRangeName' }})
    use_ip_aliases: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useIpAliases' }})
    
