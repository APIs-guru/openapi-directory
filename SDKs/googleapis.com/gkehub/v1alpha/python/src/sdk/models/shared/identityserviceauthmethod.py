from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import identityservicegoogleconfig
from . import identityserviceoidcconfig


@dataclass_json
@dataclass
class IdentityServiceAuthMethod:
    google_config: Optional[identityservicegoogleconfig.IdentityServiceGoogleConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oidc_config: Optional[identityserviceoidcconfig.IdentityServiceOidcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidcConfig' }})
    proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxy' }})
    
