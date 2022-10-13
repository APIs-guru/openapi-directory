from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iosdevice


@dataclass_json
@dataclass
class IosDeviceList:
    ios_devices: Optional[List[iosdevice.IosDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosDevices' }})
    
