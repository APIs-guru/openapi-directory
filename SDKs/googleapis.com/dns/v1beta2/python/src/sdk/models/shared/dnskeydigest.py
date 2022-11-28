from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DNSKeyDigestTypeEnum(str, Enum):
    SHA1 = "sha1"
    SHA256 = "sha256"
    SHA384 = "sha384"


@dataclass_json
@dataclass
class DNSKeyDigest:
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    type: Optional[DNSKeyDigestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
