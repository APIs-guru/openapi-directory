from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class GoogleCloudIntegrationsV1alphaAuthConfigInput:
    r"""GoogleCloudIntegrationsV1alphaAuthConfigInput
    The AuthConfig resource use to hold channels and connection config data.
    """
    
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorEmail') }})
    credential_type: Optional[GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialType') }})
    decrypted_credential: Optional[GoogleCloudIntegrationsV1alphaCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decryptedCredential') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    encrypted_credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedCredential') }})
    expiry_notification_duration: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryNotificationDuration') }})
    last_modifier_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifierEmail') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    override_valid_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideValidTime') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    state: Optional[GoogleCloudIntegrationsV1alphaAuthConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    valid_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validTime') }})
    visibility: Optional[GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaAuthConfig:
    r"""GoogleCloudIntegrationsV1alphaAuthConfig
    The AuthConfig resource use to hold channels and connection config data.
    """
    
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorEmail') }})
    credential_type: Optional[GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialType') }})
    decrypted_credential: Optional[GoogleCloudIntegrationsV1alphaCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decryptedCredential') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    encrypted_credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedCredential') }})
    expiry_notification_duration: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryNotificationDuration') }})
    last_modifier_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifierEmail') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    override_valid_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideValidTime') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    state: Optional[GoogleCloudIntegrationsV1alphaAuthConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    valid_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validTime') }})
    visibility: Optional[GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
