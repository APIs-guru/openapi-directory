from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import device
from . import device
from . import device
from . import device
from . import device
from . import device
from . import device


@dataclass_json
@dataclass
class RescueDevices:
    sda: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sda' }})
    sdb: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdb' }})
    sdc: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdc' }})
    sdd: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdd' }})
    sde: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sde' }})
    sdf: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdf' }})
    sdg: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdg' }})
    
