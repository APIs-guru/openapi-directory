from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DecryptResponseProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class DecryptResponse:
    plaintext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plaintext' }})
    plaintext_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plaintextCrc32c' }})
    protection_level: Optional[DecryptResponseProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectionLevel' }})
    used_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedPrimary' }})
    
