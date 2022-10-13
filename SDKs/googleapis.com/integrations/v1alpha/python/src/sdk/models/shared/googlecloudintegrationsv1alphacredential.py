from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaauthtoken
from . import googlecloudintegrationsv1alphajwt
from . import googlecloudintegrationsv1alphaoauth2authorizationcode
from . import googlecloudintegrationsv1alphaoauth2clientcredentials
from . import googlecloudintegrationsv1alphaoauth2resourceownercredentials
from . import googlecloudintegrationsv1alphaoidctoken
from . import googlecloudintegrationsv1alphaserviceaccountcredentials
from . import googlecloudintegrationsv1alphausernameandpassword

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
    auth_token: Optional[googlecloudintegrationsv1alphaauthtoken.GoogleCloudIntegrationsV1alphaAuthToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authToken' }})
    credential_type: Optional[GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialType' }})
    jwt: Optional[googlecloudintegrationsv1alphajwt.GoogleCloudIntegrationsV1alphaJwt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwt' }})
    oauth2_authorization_code: Optional[googlecloudintegrationsv1alphaoauth2authorizationcode.GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2AuthorizationCode' }})
    oauth2_client_credentials: Optional[googlecloudintegrationsv1alphaoauth2clientcredentials.GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2ClientCredentials' }})
    oauth2_resource_owner_credentials: Optional[googlecloudintegrationsv1alphaoauth2resourceownercredentials.GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2ResourceOwnerCredentials' }})
    oidc_token: Optional[googlecloudintegrationsv1alphaoidctoken.GoogleCloudIntegrationsV1alphaOidcToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidcToken' }})
    service_account_credentials: Optional[googlecloudintegrationsv1alphaserviceaccountcredentials.GoogleCloudIntegrationsV1alphaServiceAccountCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountCredentials' }})
    username_and_password: Optional[googlecloudintegrationsv1alphausernameandpassword.GoogleCloudIntegrationsV1alphaUsernameAndPassword] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usernameAndPassword' }})
    
