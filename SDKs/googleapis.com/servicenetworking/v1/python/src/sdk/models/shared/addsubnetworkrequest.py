from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddSubnetworkRequest:
    r"""AddSubnetworkRequest
    Request to create a subnetwork in a previously peered service network.
    """
    
    check_service_networking_use_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkServiceNetworkingUsePermission') }})
    compute_idempotency_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeIdempotencyWindow') }})
    consumer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer') }})
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNetwork') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipPrefixLength') }})
    outside_allocation_public_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outsideAllocationPublicIpRange') }})
    private_ipv6_google_access: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIpv6GoogleAccess') }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    requested_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAddress') }})
    requested_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedRanges') }})
    secondary_ip_range_specs: Optional[List[SecondaryIPRangeSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryIpRangeSpecs') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    subnetwork_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetworkUsers') }})
    use_custom_compute_idempotency_window: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCustomComputeIdempotencyWindow') }})
    
