from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials:
    r"""GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials
    Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    
