from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum(str, Enum):
    REQUEST_TYPE_UNSPECIFIED = "REQUEST_TYPE_UNSPECIFIED"
    REQUEST_BODY = "REQUEST_BODY"
    QUERY_PARAMETERS = "QUERY_PARAMETERS"
    ENCODED_HEADER = "ENCODED_HEADER"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode:
    r"""GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode
    The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.
    """
    
    access_token: Optional[GoogleCloudIntegrationsV1alphaAccessToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    apply_reauth_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyReauthPolicy') }})
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authCode') }})
    auth_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authEndpoint') }})
    auth_params: Optional[GoogleCloudIntegrationsV1alphaParameterMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authParams') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    request_type: Optional[GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestType') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    token_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenEndpoint') }})
    token_params: Optional[GoogleCloudIntegrationsV1alphaParameterMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenParams') }})
    
