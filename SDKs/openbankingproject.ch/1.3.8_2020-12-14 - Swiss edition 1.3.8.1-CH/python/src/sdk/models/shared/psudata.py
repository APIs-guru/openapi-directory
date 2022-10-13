from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PsuData:
    additional_encrypted_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalEncryptedPassword' }})
    additional_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalPassword' }})
    encrypted_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedPassword' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    
