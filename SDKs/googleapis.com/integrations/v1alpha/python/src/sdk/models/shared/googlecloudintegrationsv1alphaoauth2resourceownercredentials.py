from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum(str, Enum):
    REQUEST_TYPE_UNSPECIFIED = "REQUEST_TYPE_UNSPECIFIED"
    REQUEST_BODY = "REQUEST_BODY"
    QUERY_PARAMETERS = "QUERY_PARAMETERS"
    ENCODED_HEADER = "ENCODED_HEADER"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials:
    r"""GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials
    For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token.
    """
    
    access_token: Optional[GoogleCloudIntegrationsV1alphaAccessToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    request_type: Optional[GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestType') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    token_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenEndpoint') }})
    token_params: Optional[GoogleCloudIntegrationsV1alphaParameterMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenParams') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
