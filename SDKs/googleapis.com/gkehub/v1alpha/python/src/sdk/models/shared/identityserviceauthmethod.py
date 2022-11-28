from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IdentityServiceAuthMethod:
    r"""IdentityServiceAuthMethod
    Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
    """
    
    azuread_config: Optional[IdentityServiceAzureAdConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureadConfig') }})
    google_config: Optional[IdentityServiceGoogleConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oidc_config: Optional[IdentityServiceOidcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcConfig') }})
    proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy') }})
    

@dataclass_json
@dataclass
class IdentityServiceAuthMethodInput:
    r"""IdentityServiceAuthMethodInput
    Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
    """
    
    azuread_config: Optional[IdentityServiceAzureAdConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureadConfig') }})
    google_config: Optional[IdentityServiceGoogleConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oidc_config: Optional[IdentityServiceOidcConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcConfig') }})
    proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy') }})
    
