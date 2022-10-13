from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dnskeydigest

class DNSKeyAlgorithmEnum(str, Enum):
    RSASHA1 = "rsasha1"
    RSASHA256 = "rsasha256"
    RSASHA512 = "rsasha512"
    ECDSAP256SHA256 = "ecdsap256sha256"
    ECDSAP384SHA384 = "ecdsap384sha384"

class DNSKeyTypeEnum(str, Enum):
    KEY_SIGNING = "keySigning"
    ZONE_SIGNING = "zoneSigning"


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
    
