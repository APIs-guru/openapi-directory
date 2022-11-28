from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest:
    r"""GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest
    Request message for blocking account on device.
    """
    
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    
