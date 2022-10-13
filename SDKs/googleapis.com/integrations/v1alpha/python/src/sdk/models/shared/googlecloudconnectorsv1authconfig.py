from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1configvariable
from . import googlecloudconnectorsv1authconfigoauth2clientcredentials
from . import googlecloudconnectorsv1authconfigoauth2jwtbearer
from . import googlecloudconnectorsv1authconfigsshpublickey
from . import googlecloudconnectorsv1authconfiguserpassword

class GoogleCloudConnectorsV1AuthConfigAuthTypeEnum(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    USER_PASSWORD = "USER_PASSWORD"
    OAUTH2_JWT_BEARER = "OAUTH2_JWT_BEARER"
    OAUTH2_CLIENT_CREDENTIALS = "OAUTH2_CLIENT_CREDENTIALS"
    SSH_PUBLIC_KEY = "SSH_PUBLIC_KEY"
    OAUTH2_AUTH_CODE_FLOW = "OAUTH2_AUTH_CODE_FLOW"


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfig:
    additional_variables: Optional[List[googlecloudconnectorsv1configvariable.GoogleCloudConnectorsV1ConfigVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalVariables' }})
    auth_type: Optional[GoogleCloudConnectorsV1AuthConfigAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authType' }})
    oauth2_client_credentials: Optional[googlecloudconnectorsv1authconfigoauth2clientcredentials.GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2ClientCredentials' }})
    oauth2_jwt_bearer: Optional[googlecloudconnectorsv1authconfigoauth2jwtbearer.GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2JwtBearer' }})
    ssh_public_key: Optional[googlecloudconnectorsv1authconfigsshpublickey.GoogleCloudConnectorsV1AuthConfigSSHPublicKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshPublicKey' }})
    user_password: Optional[googlecloudconnectorsv1authconfiguserpassword.GoogleCloudConnectorsV1AuthConfigUserPassword] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPassword' }})
    
