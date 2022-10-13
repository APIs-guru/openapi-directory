from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1networkdevice


@dataclass_json
@dataclass
class GoogleChromeManagementV1NetworkInfo:
    network_devices: Optional[List[googlechromemanagementv1networkdevice.GoogleChromeManagementV1NetworkDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkDevices' }})
    
