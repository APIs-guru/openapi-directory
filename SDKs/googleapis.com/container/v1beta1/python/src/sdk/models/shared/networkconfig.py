from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import defaultsnatstatus
from . import dnsconfig
from . import serviceexternalipsconfig

class NetworkConfigDatapathProviderEnum(str, Enum):
    DATAPATH_PROVIDER_UNSPECIFIED = "DATAPATH_PROVIDER_UNSPECIFIED"
    LEGACY_DATAPATH = "LEGACY_DATAPATH"
    ADVANCED_DATAPATH = "ADVANCED_DATAPATH"

class NetworkConfigPrivateIpv6GoogleAccessEnum(str, Enum):
    PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
    PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
    PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"


@dataclass_json
@dataclass
class NetworkConfig:
    datapath_provider: Optional[NetworkConfigDatapathProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapathProvider' }})
    default_snat_status: Optional[defaultsnatstatus.DefaultSnatStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSnatStatus' }})
    dns_config: Optional[dnsconfig.DNSConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsConfig' }})
    enable_intra_node_visibility: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableIntraNodeVisibility' }})
    enable_l4ilb_subsetting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableL4ilbSubsetting' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    private_ipv6_google_access: Optional[NetworkConfigPrivateIpv6GoogleAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpv6GoogleAccess' }})
    service_external_ips_config: Optional[serviceexternalipsconfig.ServiceExternalIPsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceExternalIpsConfig' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    
