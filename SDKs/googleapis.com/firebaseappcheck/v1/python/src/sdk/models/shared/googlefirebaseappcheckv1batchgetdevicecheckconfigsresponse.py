from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1devicecheckconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1devicecheckconfig.GoogleFirebaseAppcheckV1DeviceCheckConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
