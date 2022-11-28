from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ManagedCertificateStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    FAILED = "FAILED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class ManagedCertificate:
    r"""ManagedCertificate
    Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
    """
    
    authorization_attempt_info: Optional[List[AuthorizationAttemptInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationAttemptInfo') }})
    dns_authorizations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsAuthorizations') }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    issuance_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuanceConfig') }})
    provisioning_issue: Optional[ProvisioningIssue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningIssue') }})
    state: Optional[ManagedCertificateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class ManagedCertificateInput:
    r"""ManagedCertificateInput
    Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
    """
    
    dns_authorizations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsAuthorizations') }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    issuance_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuanceConfig') }})
    
