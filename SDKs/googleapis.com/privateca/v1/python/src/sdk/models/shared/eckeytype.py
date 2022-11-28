from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EcKeyTypeSignatureAlgorithmEnum(str, Enum):
    EC_SIGNATURE_ALGORITHM_UNSPECIFIED = "EC_SIGNATURE_ALGORITHM_UNSPECIFIED"
    ECDSA_P256 = "ECDSA_P256"
    ECDSA_P384 = "ECDSA_P384"
    EDDSA_25519 = "EDDSA_25519"


@dataclass_json
@dataclass
class EcKeyType:
    r"""EcKeyType
    Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool.
    """
    
    signature_algorithm: Optional[EcKeyTypeSignatureAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureAlgorithm') }})
    
