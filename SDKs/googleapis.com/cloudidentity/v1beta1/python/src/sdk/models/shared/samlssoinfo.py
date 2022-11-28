from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SamlSsoInfo:
    r"""SamlSsoInfo
    Details that are applicable when `sso_mode` == `SAML_SSO`.
    """
    
    inbound_saml_sso_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundSamlSsoProfile') }})
    
