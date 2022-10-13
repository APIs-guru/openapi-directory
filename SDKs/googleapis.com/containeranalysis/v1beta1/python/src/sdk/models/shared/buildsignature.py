from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BuildSignatureKeyTypeEnum(str, Enum):
    KEY_TYPE_UNSPECIFIED = "KEY_TYPE_UNSPECIFIED"
    PGP_ASCII_ARMORED = "PGP_ASCII_ARMORED"
    PKIX_PEM = "PKIX_PEM"


@dataclass_json
@dataclass
class BuildSignature:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyId' }})
    key_type: Optional[BuildSignatureKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    
