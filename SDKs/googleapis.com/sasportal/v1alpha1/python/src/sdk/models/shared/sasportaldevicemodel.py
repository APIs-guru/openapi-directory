from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SasPortalDeviceModel:
    r"""SasPortalDeviceModel
    Information about the model of the device.
    """
    
    firmware_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firmwareVersion') }})
    hardware_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardwareVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    software_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareVersion') }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    
