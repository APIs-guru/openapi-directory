from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleChromeManagementV1NetworkDeviceTypeEnum(str, Enum):
    NETWORK_DEVICE_TYPE_UNSPECIFIED = "NETWORK_DEVICE_TYPE_UNSPECIFIED"
    CELLULAR_DEVICE = "CELLULAR_DEVICE"
    ETHERNET_DEVICE = "ETHERNET_DEVICE"
    WIFI_DEVICE = "WIFI_DEVICE"


@dataclass_json
@dataclass
class GoogleChromeManagementV1NetworkDevice:
    r"""GoogleChromeManagementV1NetworkDevice
    Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
    """
    
    iccid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iccid') }})
    imei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imei') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macAddress') }})
    mdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mdn') }})
    meid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meid') }})
    type: Optional[GoogleChromeManagementV1NetworkDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
