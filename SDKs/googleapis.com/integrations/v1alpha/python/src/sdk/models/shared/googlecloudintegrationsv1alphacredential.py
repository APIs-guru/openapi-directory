from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum(str, Enum):
    CREDENTIAL_TYPE_UNSPECIFIED = "CREDENTIAL_TYPE_UNSPECIFIED"
    USERNAME_AND_PASSWORD = "USERNAME_AND_PASSWORD"
    API_KEY = "API_KEY"
    OAUTH2_AUTHORIZATION_CODE = "OAUTH2_AUTHORIZATION_CODE"
    OAUTH2_IMPLICIT = "OAUTH2_IMPLICIT"
    OAUTH2_CLIENT_CREDENTIALS = "OAUTH2_CLIENT_CREDENTIALS"
    OAUTH2_RESOURCE_OWNER_CREDENTIALS = "OAUTH2_RESOURCE_OWNER_CREDENTIALS"
    JWT = "JWT"
    AUTH_TOKEN = "AUTH_TOKEN"
    SERVICE_ACCOUNT = "SERVICE_ACCOUNT"
    CLIENT_CERTIFICATE_ONLY = "CLIENT_CERTIFICATE_ONLY"
    OIDC_TOKEN = "OIDC_TOKEN"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCredential:
    r"""GoogleCloudIntegrationsV1alphaCredential
    Defines parameters for a single, canonical credential.
    """
    
    auth_token: Optional[GoogleCloudIntegrationsV1alphaAuthToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authToken') }})
    credential_type: Optional[GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialType') }})
    jwt: Optional[GoogleCloudIntegrationsV1alphaJwt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwt') }})
    oauth2_authorization_code: Optional[GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2AuthorizationCode') }})
    oauth2_client_credentials: Optional[GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ClientCredentials') }})
    oauth2_resource_owner_credentials: Optional[GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ResourceOwnerCredentials') }})
    oidc_token: Optional[GoogleCloudIntegrationsV1alphaOidcToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcToken') }})
    service_account_credentials: Optional[GoogleCloudIntegrationsV1alphaServiceAccountCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountCredentials') }})
    username_and_password: Optional[GoogleCloudIntegrationsV1alphaUsernameAndPassword] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usernameAndPassword') }})
    
