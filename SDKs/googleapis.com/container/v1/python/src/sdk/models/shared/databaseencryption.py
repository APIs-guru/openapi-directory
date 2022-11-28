from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DatabaseEncryptionStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    ENCRYPTED = "ENCRYPTED"
    DECRYPTED = "DECRYPTED"


@dataclass_json
@dataclass
class DatabaseEncryption:
    r"""DatabaseEncryption
    Configuration of etcd encryption.
    """
    
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyName') }})
    state: Optional[DatabaseEncryptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
