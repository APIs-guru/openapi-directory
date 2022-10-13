from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MacSignResponseProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class MacSignResponse:
    mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac' }})
    mac_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macCrc32c' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection_level: Optional[MacSignResponseProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectionLevel' }})
    verified_data_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedDataCrc32c' }})
    
