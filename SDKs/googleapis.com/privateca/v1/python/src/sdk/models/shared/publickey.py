from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PublicKeyFormatEnum(str, Enum):
    KEY_FORMAT_UNSPECIFIED = "KEY_FORMAT_UNSPECIFIED"
    PEM = "PEM"


@dataclass_json
@dataclass
class PublicKey:
    format: Optional[PublicKeyFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
