from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secondaryiprangespec


@dataclass_json
@dataclass
class AddSubnetworkRequest:
    check_service_networking_use_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkServiceNetworkingUsePermission' }})
    compute_idempotency_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeIdempotencyWindow' }})
    consumer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumer' }})
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerNetwork' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipPrefixLength' }})
    outside_allocation_public_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outsideAllocationPublicIpRange' }})
    private_ipv6_google_access: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpv6GoogleAccess' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    requested_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedAddress' }})
    requested_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedRanges' }})
    secondary_ip_range_specs: Optional[List[secondaryiprangespec.SecondaryIPRangeSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryIpRangeSpecs' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    subnetwork_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetworkUsers' }})
    use_custom_compute_idempotency_window: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useCustomComputeIdempotencyWindow' }})
    
