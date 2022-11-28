from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeviceTypeTargetingOptionDetailsDeviceTypeEnum(str, Enum):
    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    DEVICE_TYPE_COMPUTER = "DEVICE_TYPE_COMPUTER"
    DEVICE_TYPE_CONNECTED_TV = "DEVICE_TYPE_CONNECTED_TV"
    DEVICE_TYPE_SMART_PHONE = "DEVICE_TYPE_SMART_PHONE"
    DEVICE_TYPE_TABLET = "DEVICE_TYPE_TABLET"


@dataclass_json
@dataclass
class DeviceTypeTargetingOptionDetails:
    r"""DeviceTypeTargetingOptionDetails
    Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
    """
    
    device_type: Optional[DeviceTypeTargetingOptionDetailsDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    
