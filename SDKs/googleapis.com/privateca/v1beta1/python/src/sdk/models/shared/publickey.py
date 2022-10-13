from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PublicKeyTypeEnum(str, Enum):
    KEY_TYPE_UNSPECIFIED = "KEY_TYPE_UNSPECIFIED"
    PEM_RSA_KEY = "PEM_RSA_KEY"
    PEM_EC_KEY = "PEM_EC_KEY"


@dataclass_json
@dataclass
class PublicKey:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    type: Optional[PublicKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
