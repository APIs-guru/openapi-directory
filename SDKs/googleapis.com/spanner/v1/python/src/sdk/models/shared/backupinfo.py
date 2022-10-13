from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BackupInfo:
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    source_database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDatabase' }})
    version_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionTime' }})
    
