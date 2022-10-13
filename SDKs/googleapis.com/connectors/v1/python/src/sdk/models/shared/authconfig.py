from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configvariable
from . import oauth2clientcredentials
from . import oauth2jwtbearer
from . import sshpublickey
from . import userpassword

class AuthConfigAuthTypeEnum(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    USER_PASSWORD = "USER_PASSWORD"
    OAUTH2_JWT_BEARER = "OAUTH2_JWT_BEARER"
    OAUTH2_CLIENT_CREDENTIALS = "OAUTH2_CLIENT_CREDENTIALS"
    SSH_PUBLIC_KEY = "SSH_PUBLIC_KEY"
    OAUTH2_AUTH_CODE_FLOW = "OAUTH2_AUTH_CODE_FLOW"


@dataclass_json
@dataclass
class AuthConfig:
    additional_variables: Optional[List[configvariable.ConfigVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalVariables' }})
    auth_type: Optional[AuthConfigAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authType' }})
    oauth2_client_credentials: Optional[oauth2clientcredentials.Oauth2ClientCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2ClientCredentials' }})
    oauth2_jwt_bearer: Optional[oauth2jwtbearer.Oauth2JwtBearer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2JwtBearer' }})
    ssh_public_key: Optional[sshpublickey.SSHPublicKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshPublicKey' }})
    user_password: Optional[userpassword.UserPassword] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPassword' }})
    
