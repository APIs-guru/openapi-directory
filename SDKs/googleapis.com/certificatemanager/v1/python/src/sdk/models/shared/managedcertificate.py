from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authorizationattemptinfo
from . import provisioningissue

class ManagedCertificateStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    FAILED = "FAILED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class ManagedCertificate:
    authorization_attempt_info: Optional[List[authorizationattemptinfo.AuthorizationAttemptInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationAttemptInfo' }})
    dns_authorizations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsAuthorizations' }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    issuance_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuanceConfig' }})
    provisioning_issue: Optional[provisioningissue.ProvisioningIssue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningIssue' }})
    state: Optional[ManagedCertificateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
