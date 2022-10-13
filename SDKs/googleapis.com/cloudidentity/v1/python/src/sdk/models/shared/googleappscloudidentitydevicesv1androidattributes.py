from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum(str, Enum):
    OWNERSHIP_PRIVILEGE_UNSPECIFIED = "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
    DEVICE_ADMINISTRATOR = "DEVICE_ADMINISTRATOR"
    PROFILE_OWNER = "PROFILE_OWNER"
    DEVICE_OWNER = "DEVICE_OWNER"


@dataclass_json
@dataclass
class GoogleAppsCloudidentityDevicesV1AndroidAttributes:
    enabled_unknown_sources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledUnknownSources' }})
    owner_profile_account: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerProfileAccount' }})
    ownership_privilege: Optional[GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownershipPrivilege' }})
    supports_work_profile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsWorkProfile' }})
    
