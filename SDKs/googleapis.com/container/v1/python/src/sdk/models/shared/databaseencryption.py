from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DatabaseEncryptionStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    ENCRYPTED = "ENCRYPTED"
    DECRYPTED = "DECRYPTED"


@dataclass_json
@dataclass
class DatabaseEncryption:
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyName' }})
    state: Optional[DatabaseEncryptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
