from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput:
    r"""GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput
    A pair of SAML RP-IDP configurations when the project acts as the relying party.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    idp_config: Optional[GoogleCloudIdentitytoolkitAdminV2IdpConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sp_config: Optional[GoogleCloudIdentitytoolkitAdminV2SpConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spConfig') }})
    

@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
    A pair of SAML RP-IDP configurations when the project acts as the relying party.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    idp_config: Optional[GoogleCloudIdentitytoolkitAdminV2IdpConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sp_config: Optional[GoogleCloudIdentitytoolkitAdminV2SpConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spConfig') }})
    
