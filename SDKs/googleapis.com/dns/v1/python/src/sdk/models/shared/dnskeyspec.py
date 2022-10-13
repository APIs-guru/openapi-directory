from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DNSKeySpecAlgorithmEnum(str, Enum):
    RSASHA1 = "rsasha1"
    RSASHA256 = "rsasha256"
    RSASHA512 = "rsasha512"
    ECDSAP256SHA256 = "ecdsap256sha256"
    ECDSAP384SHA384 = "ecdsap384sha384"

class DNSKeySpecKeyTypeEnum(str, Enum):
    KEY_SIGNING = "keySigning"
    ZONE_SIGNING = "zoneSigning"


@dataclass_json
@dataclass
class DNSKeySpec:
    algorithm: Optional[DNSKeySpecAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    key_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyLength' }})
    key_type: Optional[DNSKeySpecKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
