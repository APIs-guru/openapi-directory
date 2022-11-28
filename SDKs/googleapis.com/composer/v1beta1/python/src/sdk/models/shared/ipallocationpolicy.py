from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPAllocationPolicy:
    r"""IPAllocationPolicy
    Configuration for controlling how IPs are allocated in the GKE cluster.
    """
    
    cluster_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterIpv4CidrBlock') }})
    cluster_secondary_range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterSecondaryRangeName') }})
    services_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicesIpv4CidrBlock') }})
    services_secondary_range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicesSecondaryRangeName') }})
    use_ip_aliases: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useIpAliases') }})
    
