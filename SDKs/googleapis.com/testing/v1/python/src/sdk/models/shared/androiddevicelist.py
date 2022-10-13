from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import androiddevice


@dataclass_json
@dataclass
class AndroidDeviceList:
    android_devices: Optional[List[androiddevice.AndroidDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidDevices' }})
    
