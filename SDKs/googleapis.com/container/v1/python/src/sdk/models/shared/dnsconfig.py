from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DNSConfigClusterDNSEnum(str, Enum):
    PROVIDER_UNSPECIFIED = "PROVIDER_UNSPECIFIED"
    PLATFORM_DEFAULT = "PLATFORM_DEFAULT"
    CLOUD_DNS = "CLOUD_DNS"

class DNSConfigClusterDNSScopeEnum(str, Enum):
    DNS_SCOPE_UNSPECIFIED = "DNS_SCOPE_UNSPECIFIED"
    VPC_SCOPE = "VPC_SCOPE"


@dataclass_json
@dataclass
class DNSConfig:
    cluster_dns: Optional[DNSConfigClusterDNSEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterDns' }})
    cluster_dns_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterDnsDomain' }})
    cluster_dns_scope: Optional[DNSConfigClusterDNSScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterDnsScope' }})
    
