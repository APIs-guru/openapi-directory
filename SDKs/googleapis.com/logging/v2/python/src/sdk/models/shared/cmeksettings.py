from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CmekSettings:
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    kms_key_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyVersionName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountId' }})
    
