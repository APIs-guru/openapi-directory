from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dnskeydigest

class DNSKeyAlgorithmEnum(str, Enum):
    RSASHA1 = "RSASHA1"
    RSASHA256 = "RSASHA256"
    RSASHA512 = "RSASHA512"
    ECDSAP256_SHA256 = "ECDSAP256SHA256"
    ECDSAP384_SHA384 = "ECDSAP384SHA384"

class DNSKeyTypeEnum(str, Enum):
    KEY_SIGNING = "KEY_SIGNING"
    ZONE_SIGNING = "ZONE_SIGNING"


@dataclass_json
@dataclass
class DNSKey:
    algorithm: Optional[DNSKeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    digests: Optional[List[dnskeydigest.DNSKeyDigest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digests' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    key_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyLength' }})
    key_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyTag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    type: Optional[DNSKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
