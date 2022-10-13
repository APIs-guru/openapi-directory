from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EcKeyTypeSignatureAlgorithmEnum(str, Enum):
    EC_SIGNATURE_ALGORITHM_UNSPECIFIED = "EC_SIGNATURE_ALGORITHM_UNSPECIFIED"
    ECDSA_P256 = "ECDSA_P256"
    ECDSA_P384 = "ECDSA_P384"
    EDDSA_25519 = "EDDSA_25519"


@dataclass_json
@dataclass
class EcKeyType:
    signature_algorithm: Optional[EcKeyTypeSignatureAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureAlgorithm' }})
    
