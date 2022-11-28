from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""PkixPublicKey
    A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.
    """
    
    public_key_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyPem') }})
    signature_algorithm: Optional[PkixPublicKeySignatureAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureAlgorithm') }})
    
