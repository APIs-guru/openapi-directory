from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum(str, Enum):
    COMPROMISED_STATE_UNSPECIFIED = "COMPROMISED_STATE_UNSPECIFIED"
    COMPROMISED = "COMPROMISED"
    NOT_COMPROMISED = "NOT_COMPROMISED"

class GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum(str, Enum):
    MANAGEMENT_STATE_UNSPECIFIED = "MANAGEMENT_STATE_UNSPECIFIED"
    WIPING = "WIPING"
    WIPED = "WIPED"
    APPROVED = "APPROVED"
    BLOCKED = "BLOCKED"
    PENDING_APPROVAL = "PENDING_APPROVAL"
    UNENROLLED = "UNENROLLED"

class GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum(str, Enum):
    PASSWORD_STATE_UNSPECIFIED = "PASSWORD_STATE_UNSPECIFIED"
    PASSWORD_SET = "PASSWORD_SET"
    PASSWORD_NOT_SET = "PASSWORD_NOT_SET"


@dataclass_json
@dataclass
class GoogleAppsCloudidentityDevicesV1DeviceUser:
    compromised_state: Optional[GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compromisedState' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    first_sync_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstSyncTime' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    last_sync_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSyncTime' }})
    management_state: Optional[GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password_state: Optional[GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordState' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgent' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmail' }})
    
