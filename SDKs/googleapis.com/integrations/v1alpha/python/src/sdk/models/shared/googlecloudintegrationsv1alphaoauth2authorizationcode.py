from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaaccesstoken
from . import googlecloudintegrationsv1alphaparametermap
from . import googlecloudintegrationsv1alphaparametermap

class GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum(str, Enum):
    REQUEST_TYPE_UNSPECIFIED = "REQUEST_TYPE_UNSPECIFIED"
    REQUEST_BODY = "REQUEST_BODY"
    QUERY_PARAMETERS = "QUERY_PARAMETERS"
    ENCODED_HEADER = "ENCODED_HEADER"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode:
    access_token: Optional[googlecloudintegrationsv1alphaaccesstoken.GoogleCloudIntegrationsV1alphaAccessToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    apply_reauth_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyReauthPolicy' }})
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authCode' }})
    auth_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authEndpoint' }})
    auth_params: Optional[googlecloudintegrationsv1alphaparametermap.GoogleCloudIntegrationsV1alphaParameterMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authParams' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    request_type: Optional[GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestType' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    token_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenEndpoint' }})
    token_params: Optional[googlecloudintegrationsv1alphaparametermap.GoogleCloudIntegrationsV1alphaParameterMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenParams' }})
    
