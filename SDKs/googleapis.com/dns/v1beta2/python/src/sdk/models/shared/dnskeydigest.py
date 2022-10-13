from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DNSKeyDigestTypeEnum(str, Enum):
    SHA1 = "sha1"
    SHA256 = "sha256"
    SHA384 = "sha384"


@dataclass_json
@dataclass
class DNSKeyDigest:
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    type: Optional[DNSKeyDigestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
