from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaJwt:
    jwt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwt' }})
    jwt_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtHeader' }})
    jwt_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtPayload' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
