from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1DisplayInfo:
    r"""GoogleChromeManagementV1DisplayInfo
    Information for a display.
    """
    
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    is_internal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInternal') }})
    refresh_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshRate') }})
    resolution_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionHeight') }})
    resolution_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionWidth') }})
    
