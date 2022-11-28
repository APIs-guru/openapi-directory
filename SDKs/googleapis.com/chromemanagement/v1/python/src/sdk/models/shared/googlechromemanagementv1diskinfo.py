from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1DiskInfo:
    r"""GoogleChromeManagementV1DiskInfo
    Status of the single storage device.
    """
    
    bytes_read_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesReadThisSession') }})
    bytes_written_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesWrittenThisSession') }})
    discard_time_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discardTimeThisSession') }})
    health: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    io_time_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ioTimeThisSession') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    read_time_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTimeThisSession') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    volume_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeIds') }})
    write_time_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeTimeThisSession') }})
    
