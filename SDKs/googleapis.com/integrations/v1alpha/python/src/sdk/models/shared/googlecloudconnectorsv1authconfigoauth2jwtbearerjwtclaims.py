from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims:
    r"""GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims
    JWT claims used for the jwt-bearer authorization grant.
    """
    
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    
