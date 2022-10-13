from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RestoreInstanceRequest:
    file_share: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileShare' }})
    source_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceBackup' }})
    source_snapshot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSnapshot' }})
    
