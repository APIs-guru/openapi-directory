from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PkixPublicKeySignatureAlgorithmEnum(str, Enum):
    SIGNATURE_ALGORITHM_UNSPECIFIED = "SIGNATURE_ALGORITHM_UNSPECIFIED"
    RSA_PSS_2048_SHA256 = "RSA_PSS_2048_SHA256"
    RSA_SIGN_PSS_2048_SHA256 = "RSA_SIGN_PSS_2048_SHA256"
    RSA_PSS_3072_SHA256 = "RSA_PSS_3072_SHA256"
    RSA_SIGN_PSS_3072_SHA256 = "RSA_SIGN_PSS_3072_SHA256"
    RSA_PSS_4096_SHA256 = "RSA_PSS_4096_SHA256"
    RSA_SIGN_PSS_4096_SHA256 = "RSA_SIGN_PSS_4096_SHA256"
    RSA_PSS_4096_SHA512 = "RSA_PSS_4096_SHA512"
    RSA_SIGN_PSS_4096_SHA512 = "RSA_SIGN_PSS_4096_SHA512"
    RSA_SIGN_PKCS1_2048_SHA256 = "RSA_SIGN_PKCS1_2048_SHA256"
    RSA_SIGN_PKCS1_3072_SHA256 = "RSA_SIGN_PKCS1_3072_SHA256"
    RSA_SIGN_PKCS1_4096_SHA256 = "RSA_SIGN_PKCS1_4096_SHA256"
    RSA_SIGN_PKCS1_4096_SHA512 = "RSA_SIGN_PKCS1_4096_SHA512"
    ECDSA_P256_SHA256 = "ECDSA_P256_SHA256"
    EC_SIGN_P256_SHA256 = "EC_SIGN_P256_SHA256"
    ECDSA_P384_SHA384 = "ECDSA_P384_SHA384"
    EC_SIGN_P384_SHA384 = "EC_SIGN_P384_SHA384"
    ECDSA_P521_SHA512 = "ECDSA_P521_SHA512"
    EC_SIGN_P521_SHA512 = "EC_SIGN_P521_SHA512"


@dataclass_json
@dataclass
class PkixPublicKey:
    public_key_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyPem' }})
    signature_algorithm: Optional[PkixPublicKeySignatureAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureAlgorithm' }})
    
