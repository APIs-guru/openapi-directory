from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DNSConfigClusterDNSEnum(str, Enum):
    PROVIDER_UNSPECIFIED = "PROVIDER_UNSPECIFIED"
    PLATFORM_DEFAULT = "PLATFORM_DEFAULT"
    CLOUD_DNS = "CLOUD_DNS"

class DNSConfigClusterDNSScopeEnum(str, Enum):
    DNS_SCOPE_UNSPECIFIED = "DNS_SCOPE_UNSPECIFIED"
    CLUSTER_SCOPE = "CLUSTER_SCOPE"
    VPC_SCOPE = "VPC_SCOPE"


@dataclass_json
@dataclass
class DNSConfig:
    r"""DNSConfig
    DNSConfig contains the desired set of options for configuring clusterDNS.
    """
    
    cluster_dns: Optional[DNSConfigClusterDNSEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterDns') }})
    cluster_dns_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterDnsDomain') }})
    cluster_dns_scope: Optional[DNSConfigClusterDNSScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterDnsScope') }})
    
