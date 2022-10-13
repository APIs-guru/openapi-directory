from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import restoredatabaseencryptionconfig


@dataclass_json
@dataclass
class RestoreDatabaseRequest:
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseId' }})
    encryption_config: Optional[restoredatabaseencryptionconfig.RestoreDatabaseEncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    
