from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import androiddevice
from . import iosdevice


@dataclass_json
@dataclass
class Environment:
    android_device: Optional[androiddevice.AndroidDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidDevice' }})
    ios_device: Optional[iosdevice.IosDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosDevice' }})
    
