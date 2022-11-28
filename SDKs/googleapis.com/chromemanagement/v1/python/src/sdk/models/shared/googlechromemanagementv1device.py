from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1Device:
    r"""GoogleChromeManagementV1Device
    Describes a device reporting Chrome browser information.
    """
    
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    machine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machine') }})
    
