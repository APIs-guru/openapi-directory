from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Secret:
    cipher_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cipherText' }})
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyName' }})
    
