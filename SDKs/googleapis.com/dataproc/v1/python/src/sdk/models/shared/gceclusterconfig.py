from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GceClusterConfigPrivateIpv6GoogleAccessEnum(str, Enum):
    PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    INHERIT_FROM_SUBNETWORK = "INHERIT_FROM_SUBNETWORK"
    OUTBOUND = "OUTBOUND"
    BIDIRECTIONAL = "BIDIRECTIONAL"


@dataclass_json
@dataclass
class GceClusterConfig:
    r"""GceClusterConfig
    Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
    """
    
    confidential_instance_config: Optional[ConfidentialInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidentialInstanceConfig') }})
    internal_ip_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIpOnly') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUri') }})
    node_group_affinity: Optional[NodeGroupAffinity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeGroupAffinity') }})
    private_ipv6_google_access: Optional[GceClusterConfigPrivateIpv6GoogleAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIpv6GoogleAccess') }})
    reservation_affinity: Optional[ReservationAffinity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationAffinity') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    service_account_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountScopes') }})
    shielded_instance_config: Optional[ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    subnetwork_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetworkUri') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    zone_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoneUri') }})
    
