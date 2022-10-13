from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeviceInfoDeviceTypeEnum(str, Enum):
    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    WEB = "WEB"
    MOBILE_WEB = "MOBILE_WEB"
    ANDROID = "ANDROID"
    IOS = "IOS"
    BOT = "BOT"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class DeviceInfo:
    device_type: Optional[DeviceInfoDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceType' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
