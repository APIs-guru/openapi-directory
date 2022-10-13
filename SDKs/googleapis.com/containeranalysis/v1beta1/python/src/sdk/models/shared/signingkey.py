from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SigningKey:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyId' }})
    key_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyScheme' }})
    key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    public_key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyValue' }})
    
