from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import confidentialinstanceconfig
from . import nodegroupaffinity
from . import reservationaffinity
from . import shieldedinstanceconfig

class GceClusterConfigPrivateIpv6GoogleAccessEnum(str, Enum):
    PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    INHERIT_FROM_SUBNETWORK = "INHERIT_FROM_SUBNETWORK"
    OUTBOUND = "OUTBOUND"
    BIDIRECTIONAL = "BIDIRECTIONAL"


@dataclass_json
@dataclass
class GceClusterConfig:
    confidential_instance_config: Optional[confidentialinstanceconfig.ConfidentialInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidentialInstanceConfig' }})
    internal_ip_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalIpOnly' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    node_group_affinity: Optional[nodegroupaffinity.NodeGroupAffinity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeGroupAffinity' }})
    private_ipv6_google_access: Optional[GceClusterConfigPrivateIpv6GoogleAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpv6GoogleAccess' }})
    reservation_affinity: Optional[reservationaffinity.ReservationAffinity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservationAffinity' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    service_account_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountScopes' }})
    shielded_instance_config: Optional[shieldedinstanceconfig.ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shieldedInstanceConfig' }})
    subnetwork_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetworkUri' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    zone_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zoneUri' }})
    
