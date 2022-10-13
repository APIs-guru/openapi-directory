from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeviceTypeTargetingOptionDetailsDeviceTypeEnum(str, Enum):
    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    DEVICE_TYPE_COMPUTER = "DEVICE_TYPE_COMPUTER"
    DEVICE_TYPE_CONNECTED_TV = "DEVICE_TYPE_CONNECTED_TV"
    DEVICE_TYPE_SMART_PHONE = "DEVICE_TYPE_SMART_PHONE"
    DEVICE_TYPE_TABLET = "DEVICE_TYPE_TABLET"


@dataclass_json
@dataclass
class DeviceTypeTargetingOptionDetails:
    device_type: Optional[DeviceTypeTargetingOptionDetailsDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceType' }})
    
