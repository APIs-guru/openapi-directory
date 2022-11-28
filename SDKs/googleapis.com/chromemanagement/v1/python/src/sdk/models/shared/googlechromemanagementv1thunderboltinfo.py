from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleChromeManagementV1ThunderboltInfo
    Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
    """
    
    security_level: Optional[GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    
