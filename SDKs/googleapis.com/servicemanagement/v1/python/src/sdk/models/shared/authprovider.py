from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jwtlocation


@dataclass_json
@dataclass
class AuthProvider:
    audiences: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audiences' }})
    authorization_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationUrl' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    jwks_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwksUri' }})
    jwt_locations: Optional[List[jwtlocation.JwtLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtLocations' }})
    
