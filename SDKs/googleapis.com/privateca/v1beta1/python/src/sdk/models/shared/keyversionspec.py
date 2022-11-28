from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class KeyVersionSpecAlgorithmEnum(str, Enum):
    SIGN_HASH_ALGORITHM_UNSPECIFIED = "SIGN_HASH_ALGORITHM_UNSPECIFIED"
    RSA_PSS_2048_SHA256 = "RSA_PSS_2048_SHA256"
    RSA_PSS_3072_SHA256 = "RSA_PSS_3072_SHA256"
    RSA_PSS_4096_SHA256 = "RSA_PSS_4096_SHA256"
    RSA_PKCS1_2048_SHA256 = "RSA_PKCS1_2048_SHA256"
    RSA_PKCS1_3072_SHA256 = "RSA_PKCS1_3072_SHA256"
    RSA_PKCS1_4096_SHA256 = "RSA_PKCS1_4096_SHA256"
    EC_P256_SHA256 = "EC_P256_SHA256"
    EC_P384_SHA384 = "EC_P384_SHA384"


@dataclass_json
@dataclass
class KeyVersionSpec:
    r"""KeyVersionSpec
    A Cloud KMS key configuration that a CertificateAuthority will use.
    """
    
    algorithm: Optional[KeyVersionSpecAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    cloud_kms_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudKmsKeyVersion') }})
    
