from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1totalmemoryencryptioninfo


@dataclass_json
@dataclass
class GoogleChromeManagementV1MemoryInfo:
    available_ram_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableRamBytes' }})
    total_memory_encryption: Optional[googlechromemanagementv1totalmemoryencryptioninfo.GoogleChromeManagementV1TotalMemoryEncryptionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMemoryEncryption' }})
    total_ram_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRamBytes' }})
    
