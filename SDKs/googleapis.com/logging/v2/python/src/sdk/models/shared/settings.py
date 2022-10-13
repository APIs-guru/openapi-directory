from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Settings:
    disable_default_sink: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableDefaultSink' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    kms_service_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsServiceAccountId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    storage_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageLocation' }})
    
