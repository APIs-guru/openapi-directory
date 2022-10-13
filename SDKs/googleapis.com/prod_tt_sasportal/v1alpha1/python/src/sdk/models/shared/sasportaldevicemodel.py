from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SasPortalDeviceModel:
    firmware_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firmwareVersion' }})
    hardware_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardwareVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    software_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareVersion' }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    
