from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import secret
from . import jwtclaims


@dataclass_json
@dataclass
class Oauth2JwtBearer:
    client_key: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKey' }})
    jwt_claims: Optional[jwtclaims.JwtClaims] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtClaims' }})
    
