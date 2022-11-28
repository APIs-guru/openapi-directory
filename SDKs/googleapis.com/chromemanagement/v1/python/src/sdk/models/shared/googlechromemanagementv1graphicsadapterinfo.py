from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1GraphicsAdapterInfo:
    r"""GoogleChromeManagementV1GraphicsAdapterInfo
    Information of a graphics adapter (GPU).
    """
    
    adapter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adapter') }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    driver_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverVersion') }})
    
