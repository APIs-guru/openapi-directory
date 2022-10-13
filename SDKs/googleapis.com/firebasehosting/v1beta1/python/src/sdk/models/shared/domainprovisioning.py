from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certdnschallenge
from . import certhttpchallenge

class DomainProvisioningCertStatusEnum(str, Enum):
    CERT_STATUS_UNSPECIFIED = "CERT_STATUS_UNSPECIFIED"
    CERT_PENDING = "CERT_PENDING"
    CERT_MISSING = "CERT_MISSING"
    CERT_PROCESSING = "CERT_PROCESSING"
    CERT_PROPAGATING = "CERT_PROPAGATING"
    CERT_ACTIVE = "CERT_ACTIVE"
    CERT_ERROR = "CERT_ERROR"

class DomainProvisioningDNSStatusEnum(str, Enum):
    DNS_STATUS_UNSPECIFIED = "DNS_STATUS_UNSPECIFIED"
    DNS_PENDING = "DNS_PENDING"
    DNS_MISSING = "DNS_MISSING"
    DNS_PARTIAL_MATCH = "DNS_PARTIAL_MATCH"
    DNS_MATCH = "DNS_MATCH"
    DNS_EXTRANEOUS_MATCH = "DNS_EXTRANEOUS_MATCH"


@dataclass_json
@dataclass
class DomainProvisioning:
    cert_challenge_discovered_txt: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certChallengeDiscoveredTxt' }})
    cert_challenge_dns: Optional[certdnschallenge.CertDNSChallenge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certChallengeDns' }})
    cert_challenge_http: Optional[certhttpchallenge.CertHTTPChallenge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certChallengeHttp' }})
    cert_status: Optional[DomainProvisioningCertStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certStatus' }})
    discovered_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveredIps' }})
    dns_fetch_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsFetchTime' }})
    dns_status: Optional[DomainProvisioningDNSStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsStatus' }})
    expected_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedIps' }})
    
