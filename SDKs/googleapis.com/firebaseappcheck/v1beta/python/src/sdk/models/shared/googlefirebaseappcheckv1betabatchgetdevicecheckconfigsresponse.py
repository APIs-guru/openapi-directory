from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betadevicecheckconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1betadevicecheckconfig.GoogleFirebaseAppcheckV1betaDeviceCheckConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
