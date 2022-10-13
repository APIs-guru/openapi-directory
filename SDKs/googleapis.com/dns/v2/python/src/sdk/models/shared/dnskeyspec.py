from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DNSKeySpecAlgorithmEnum(str, Enum):
    RSASHA1 = "RSASHA1"
    RSASHA256 = "RSASHA256"
    RSASHA512 = "RSASHA512"
    ECDSAP256_SHA256 = "ECDSAP256SHA256"
    ECDSAP384_SHA384 = "ECDSAP384SHA384"

class DNSKeySpecKeyTypeEnum(str, Enum):
    KEY_SIGNING = "KEY_SIGNING"
    ZONE_SIGNING = "ZONE_SIGNING"


@dataclass_json
@dataclass
class DNSKeySpec:
    algorithm: Optional[DNSKeySpecAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    key_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyLength' }})
    key_type: Optional[DNSKeySpecKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
