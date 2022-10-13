from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1DisplayInfo:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    is_internal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInternal' }})
    refresh_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshRate' }})
    resolution_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionHeight' }})
    resolution_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionWidth' }})
    
