from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Device:
    r"""Device
    Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
    Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
    
    """
    
    disk_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_id') }})
    volume_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_id') }})
    
