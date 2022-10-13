from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IPAllocationPolicyIpv6AccessTypeEnum(str, Enum):
    IPV6_ACCESS_TYPE_UNSPECIFIED = "IPV6_ACCESS_TYPE_UNSPECIFIED"
    INTERNAL = "INTERNAL"
    EXTERNAL = "EXTERNAL"

class IPAllocationPolicyStackTypeEnum(str, Enum):
    STACK_TYPE_UNSPECIFIED = "STACK_TYPE_UNSPECIFIED"
    IPV4 = "IPV4"
    IPV4_IPV6 = "IPV4_IPV6"


@dataclass_json
@dataclass
class IPAllocationPolicy:
    allow_route_overlap: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowRouteOverlap' }})
    cluster_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterIpv4Cidr' }})
    cluster_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterIpv4CidrBlock' }})
    cluster_secondary_range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterSecondaryRangeName' }})
    create_subnetwork: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSubnetwork' }})
    ipv6_access_type: Optional[IPAllocationPolicyIpv6AccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6AccessType' }})
    node_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeIpv4Cidr' }})
    node_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeIpv4CidrBlock' }})
    services_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicesIpv4Cidr' }})
    services_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicesIpv4CidrBlock' }})
    services_ipv6_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicesIpv6CidrBlock' }})
    services_secondary_range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicesSecondaryRangeName' }})
    stack_type: Optional[IPAllocationPolicyStackTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackType' }})
    subnet_ipv6_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetIpv6CidrBlock' }})
    subnetwork_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetworkName' }})
    tpu_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tpuIpv4CidrBlock' }})
    use_ip_aliases: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useIpAliases' }})
    use_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useRoutes' }})
    
