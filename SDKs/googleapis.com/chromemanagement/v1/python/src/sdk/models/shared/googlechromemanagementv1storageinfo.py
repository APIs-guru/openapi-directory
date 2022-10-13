from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1storageinfodiskvolume


@dataclass_json
@dataclass
class GoogleChromeManagementV1StorageInfo:
    available_disk_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableDiskBytes' }})
    total_disk_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalDiskBytes' }})
    volume: Optional[List[googlechromemanagementv1storageinfodiskvolume.GoogleChromeManagementV1StorageInfoDiskVolume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    
