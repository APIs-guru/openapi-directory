from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DeviceInfo
    Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.
    """
    
    device_type: Optional[DeviceInfoDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
