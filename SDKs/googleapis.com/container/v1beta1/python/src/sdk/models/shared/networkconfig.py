from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""NetworkConfig
    NetworkConfig reports the relative names of network & subnetwork.
    """
    
    datapath_provider: Optional[NetworkConfigDatapathProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapathProvider') }})
    default_snat_status: Optional[DefaultSnatStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSnatStatus') }})
    dns_config: Optional[DNSConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsConfig') }})
    enable_intra_node_visibility: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableIntraNodeVisibility') }})
    enable_l4ilb_subsetting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableL4ilbSubsetting') }})
    gateway_api_config: Optional[GatewayAPIConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayApiConfig') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    private_ipv6_google_access: Optional[NetworkConfigPrivateIpv6GoogleAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIpv6GoogleAccess') }})
    service_external_ips_config: Optional[ServiceExternalIPsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceExternalIpsConfig') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    
