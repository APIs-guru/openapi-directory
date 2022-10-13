from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AsymmetricDecryptRequest:
    ciphertext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ciphertext' }})
    ciphertext_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ciphertextCrc32c' }})
    
