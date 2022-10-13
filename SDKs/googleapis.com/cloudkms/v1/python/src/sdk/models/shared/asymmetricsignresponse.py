from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AsymmetricSignResponseProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class AsymmetricSignResponse:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection_level: Optional[AsymmetricSignResponseProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectionLevel' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    signature_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureCrc32c' }})
    verified_data_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedDataCrc32c' }})
    verified_digest_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedDigestCrc32c' }})
    
