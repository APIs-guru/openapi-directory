from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GenerateRandomBytesRequestProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class GenerateRandomBytesRequest:
    length_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lengthBytes' }})
    protection_level: Optional[GenerateRandomBytesRequestProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectionLevel' }})
    
