from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DNSKeyDigestTypeEnum(str, Enum):
    SHA1 = "SHA1"
    SHA256 = "SHA256"
    SHA384 = "SHA384"


@dataclass_json
@dataclass
class DNSKeyDigest:
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    type: Optional[DNSKeyDigestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
