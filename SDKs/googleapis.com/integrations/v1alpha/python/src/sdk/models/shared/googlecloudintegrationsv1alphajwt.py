from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaJwt:
    r"""GoogleCloudIntegrationsV1alphaJwt
    Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected.
    """
    
    jwt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwt') }})
    jwt_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtHeader') }})
    jwt_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtPayload') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
