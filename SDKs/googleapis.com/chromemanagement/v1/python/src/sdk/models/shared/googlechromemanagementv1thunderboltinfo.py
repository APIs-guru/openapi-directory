from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum(str, Enum):
    THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED = "THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED"
    THUNDERBOLT_SECURITY_NONE_LEVEL = "THUNDERBOLT_SECURITY_NONE_LEVEL"
    THUNDERBOLT_SECURITY_USER_LEVEL = "THUNDERBOLT_SECURITY_USER_LEVEL"
    THUNDERBOLT_SECURITY_SECURE_LEVEL = "THUNDERBOLT_SECURITY_SECURE_LEVEL"
    THUNDERBOLT_SECURITY_DP_ONLY_LEVEL = "THUNDERBOLT_SECURITY_DP_ONLY_LEVEL"
    THUNDERBOLT_SECURITY_USB_ONLY_LEVEL = "THUNDERBOLT_SECURITY_USB_ONLY_LEVEL"
    THUNDERBOLT_SECURITY_NO_PCIE_LEVEL = "THUNDERBOLT_SECURITY_NO_PCIE_LEVEL"


@dataclass_json
@dataclass
class GoogleChromeManagementV1ThunderboltInfo:
    security_level: Optional[GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityLevel' }})
    
