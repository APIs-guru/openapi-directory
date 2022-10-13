from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MacVerifyResponseProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class MacVerifyResponse:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection_level: Optional[MacVerifyResponseProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectionLevel' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    verified_data_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedDataCrc32c' }})
    verified_mac_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedMacCrc32c' }})
    verified_success_integrity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedSuccessIntegrity' }})
    
