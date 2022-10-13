from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import messagestoragepolicy
from . import schemasettings


@dataclass_json
@dataclass
class Topic:
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    message_retention_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageRetentionDuration' }})
    message_storage_policy: Optional[messagestoragepolicy.MessageStoragePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageStoragePolicy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfiesPzs' }})
    schema_settings: Optional[schemasettings.SchemaSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaSettings' }})
    
