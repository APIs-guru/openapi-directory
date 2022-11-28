from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDeviceConfigVersionsResponse:
    r"""ListDeviceConfigVersionsResponse
    Response for `ListDeviceConfigVersions`.
    """
    
    device_configs: Optional[List[DeviceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceConfigs') }})
    
