from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum(str, Enum):
    REQUEST_TYPE_UNSPECIFIED = "REQUEST_TYPE_UNSPECIFIED"
    REQUEST_BODY = "REQUEST_BODY"
    QUERY_PARAMETERS = "QUERY_PARAMETERS"
    ENCODED_HEADER = "ENCODED_HEADER"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials:
    r"""GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials
    For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token.
    """
    
    access_token: Optional[GoogleCloudIntegrationsV1alphaAccessToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    request_type: Optional[GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestType') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    token_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenEndpoint') }})
    token_params: Optional[GoogleCloudIntegrationsV1alphaParameterMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenParams') }})
    
