from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ShaCertificateCertTypeEnum(str, Enum):
    SHA_CERTIFICATE_TYPE_UNSPECIFIED = "SHA_CERTIFICATE_TYPE_UNSPECIFIED"
    SHA_1 = "SHA_1"
    SHA_256 = "SHA_256"


@dataclass_json
@dataclass
class ShaCertificate:
    cert_type: Optional[ShaCertificateCertTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sha_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shaHash' }})
    
