from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphacredential

class GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum(str, Enum):
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

class GoogleCloudIntegrationsV1alphaAuthConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    VALID = "VALID"
    INVALID = "INVALID"
    SOFT_DELETED = "SOFT_DELETED"
    EXPIRED = "EXPIRED"
    UNAUTHORIZED = "UNAUTHORIZED"
    UNSUPPORTED = "UNSUPPORTED"

class GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum(str, Enum):
    AUTH_CONFIG_VISIBILITY_UNSPECIFIED = "AUTH_CONFIG_VISIBILITY_UNSPECIFIED"
    PRIVATE = "PRIVATE"
    CLIENT_VISIBLE = "CLIENT_VISIBLE"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaAuthConfig:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorEmail' }})
    credential_type: Optional[GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialType' }})
    decrypted_credential: Optional[googlecloudintegrationsv1alphacredential.GoogleCloudIntegrationsV1alphaCredential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decryptedCredential' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    encrypted_credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedCredential' }})
    expiry_notification_duration: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryNotificationDuration' }})
    last_modifier_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifierEmail' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    override_valid_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideValidTime' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    state: Optional[GoogleCloudIntegrationsV1alphaAuthConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    valid_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validTime' }})
    visibility: Optional[GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
