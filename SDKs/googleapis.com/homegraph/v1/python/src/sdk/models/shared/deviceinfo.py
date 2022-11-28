from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceInfo:
    r"""DeviceInfo
    Device information.
    """
    
    hw_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hwVersion') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    sw_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('swVersion') }})
    
