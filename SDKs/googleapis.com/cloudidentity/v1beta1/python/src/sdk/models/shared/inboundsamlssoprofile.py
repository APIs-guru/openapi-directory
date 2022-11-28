from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InboundSamlSsoProfile:
    r"""InboundSamlSsoProfile
    A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
    """
    
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    idp_config: Optional[SamlIdpConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sp_config: Optional[SamlSpConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spConfig') }})
    

@dataclass_json
@dataclass
class InboundSamlSsoProfileInput:
    r"""InboundSamlSsoProfileInput
    A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
    """
    
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    idp_config: Optional[SamlIdpConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    
