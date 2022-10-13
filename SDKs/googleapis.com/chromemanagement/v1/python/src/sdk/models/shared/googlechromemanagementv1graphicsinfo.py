from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1graphicsadapterinfo


@dataclass_json
@dataclass
class GoogleChromeManagementV1GraphicsInfo:
    adapter_info: Optional[googlechromemanagementv1graphicsadapterinfo.GoogleChromeManagementV1GraphicsAdapterInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adapterInfo' }})
    
