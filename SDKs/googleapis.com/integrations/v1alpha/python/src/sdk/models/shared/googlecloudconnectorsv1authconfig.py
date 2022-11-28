from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudConnectorsV1AuthConfig
    AuthConfig defines details of a authentication type.
    """
    
    additional_variables: Optional[List[GoogleCloudConnectorsV1ConfigVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalVariables') }})
    auth_type: Optional[GoogleCloudConnectorsV1AuthConfigAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    oauth2_client_credentials: Optional[GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ClientCredentials') }})
    oauth2_jwt_bearer: Optional[GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2JwtBearer') }})
    ssh_public_key: Optional[GoogleCloudConnectorsV1AuthConfigSSHPublicKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKey') }})
    user_password: Optional[GoogleCloudConnectorsV1AuthConfigUserPassword] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPassword') }})
    
