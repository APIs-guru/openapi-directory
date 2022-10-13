from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum(str, Enum):
    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    DEVICE_TYPE_COMPUTER = "DEVICE_TYPE_COMPUTER"
    DEVICE_TYPE_CONNECTED_TV = "DEVICE_TYPE_CONNECTED_TV"
    DEVICE_TYPE_SMART_PHONE = "DEVICE_TYPE_SMART_PHONE"
    DEVICE_TYPE_TABLET = "DEVICE_TYPE_TABLET"


@dataclass_json
@dataclass
class DeviceTypeAssignedTargetingOptionDetails:
    device_type: Optional[DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceType' }})
    youtube_and_partners_bid_multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeAndPartnersBidMultiplier' }})
    
