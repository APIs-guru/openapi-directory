from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1DiskInfo:
    bytes_read_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesReadThisSession' }})
    bytes_written_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesWrittenThisSession' }})
    discard_time_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discardTimeThisSession' }})
    health: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    io_time_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ioTimeThisSession' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    read_time_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTimeThisSession' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeBytes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    volume_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeIds' }})
    write_time_this_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeTimeThisSession' }})
    
