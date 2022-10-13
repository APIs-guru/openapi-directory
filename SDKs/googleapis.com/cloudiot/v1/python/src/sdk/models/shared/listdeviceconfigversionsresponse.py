from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceconfig


@dataclass_json
@dataclass
class ListDeviceConfigVersionsResponse:
    device_configs: Optional[List[deviceconfig.DeviceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceConfigs' }})
    
