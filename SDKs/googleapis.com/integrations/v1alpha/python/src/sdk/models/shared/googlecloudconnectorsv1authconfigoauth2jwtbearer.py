from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer:
    r"""GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer
    Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
    """
    
    client_key: Optional[GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    jwt_claims: Optional[GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtClaims') }})
    
