from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import samlssoinfo
from . import signinbehavior

class InboundSsoAssignmentSsoModeEnum(str, Enum):
    SSO_MODE_UNSPECIFIED = "SSO_MODE_UNSPECIFIED"
    SSO_OFF = "SSO_OFF"
    SAML_SSO = "SAML_SSO"
    DOMAIN_WIDE_SAML_IF_ENABLED = "DOMAIN_WIDE_SAML_IF_ENABLED"


@dataclass_json
@dataclass
class InboundSsoAssignment:
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    saml_sso_info: Optional[samlssoinfo.SamlSsoInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samlSsoInfo' }})
    sign_in_behavior: Optional[signinbehavior.SignInBehavior] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signInBehavior' }})
    sso_mode: Optional[InboundSsoAssignmentSsoModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssoMode' }})
    target_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGroup' }})
    target_org_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetOrgUnit' }})
    
