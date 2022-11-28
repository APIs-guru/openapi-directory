from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthProvider:
    r"""AuthProvider
    Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
    """
    
    audiences: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audiences') }})
    authorization_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationUrl') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    jwks_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwksUri') }})
    jwt_locations: Optional[List[JwtLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtLocations') }})
    
