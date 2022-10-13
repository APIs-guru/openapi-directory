from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeviceTypeEnum(str, Enum):
    UNKNOWN = "unknown"
    PHONE = "phone"
    TABLET = "tablet"
    WATCH = "watch"
    CHEST_STRAP = "chestStrap"
    SCALE = "scale"
    HEAD_MOUNTED = "headMounted"
    SMART_DISPLAY = "smartDisplay"


@dataclass_json
@dataclass
class Device:
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    type: Optional[DeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
