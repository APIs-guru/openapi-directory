from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceInfo:
    hw_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hwVersion' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    sw_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'swVersion' }})
    
