from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceConfig:
    binary_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryData' }})
    cloud_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudUpdateTime' }})
    device_ack_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceAckTime' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
