from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1DeviceCheckConfig:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKey' }})
    private_key_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKeySet' }})
    token_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenTtl' }})
    
