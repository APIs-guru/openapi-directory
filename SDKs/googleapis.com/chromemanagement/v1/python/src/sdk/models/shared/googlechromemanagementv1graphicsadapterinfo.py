from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1GraphicsAdapterInfo:
    adapter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adapter' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    driver_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driverVersion' }})
    
