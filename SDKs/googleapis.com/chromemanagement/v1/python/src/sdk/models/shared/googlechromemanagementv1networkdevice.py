from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1NetworkDeviceTypeEnum(str, Enum):
    NETWORK_DEVICE_TYPE_UNSPECIFIED = "NETWORK_DEVICE_TYPE_UNSPECIFIED"
    CELLULAR_DEVICE = "CELLULAR_DEVICE"
    ETHERNET_DEVICE = "ETHERNET_DEVICE"
    WIFI_DEVICE = "WIFI_DEVICE"


@dataclass_json
@dataclass
class GoogleChromeManagementV1NetworkDevice:
    iccid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iccid' }})
    imei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imei' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macAddress' }})
    mdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mdn' }})
    meid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meid' }})
    type: Optional[GoogleChromeManagementV1NetworkDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
