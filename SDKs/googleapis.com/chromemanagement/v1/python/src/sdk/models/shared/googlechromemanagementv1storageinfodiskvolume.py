from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1StorageInfoDiskVolume:
    storage_free_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageFreeBytes' }})
    storage_total_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageTotalBytes' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    
