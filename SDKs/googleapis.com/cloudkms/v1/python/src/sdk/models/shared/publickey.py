from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PublicKeyAlgorithmEnum(str, Enum):
    CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED"
    GOOGLE_SYMMETRIC_ENCRYPTION = "GOOGLE_SYMMETRIC_ENCRYPTION"
    RSA_SIGN_PSS_2048_SHA256 = "RSA_SIGN_PSS_2048_SHA256"
    RSA_SIGN_PSS_3072_SHA256 = "RSA_SIGN_PSS_3072_SHA256"
    RSA_SIGN_PSS_4096_SHA256 = "RSA_SIGN_PSS_4096_SHA256"
    RSA_SIGN_PSS_4096_SHA512 = "RSA_SIGN_PSS_4096_SHA512"
    RSA_SIGN_PKCS1_2048_SHA256 = "RSA_SIGN_PKCS1_2048_SHA256"
    RSA_SIGN_PKCS1_3072_SHA256 = "RSA_SIGN_PKCS1_3072_SHA256"
    RSA_SIGN_PKCS1_4096_SHA256 = "RSA_SIGN_PKCS1_4096_SHA256"
    RSA_SIGN_PKCS1_4096_SHA512 = "RSA_SIGN_PKCS1_4096_SHA512"
    RSA_SIGN_RAW_PKCS1_2048 = "RSA_SIGN_RAW_PKCS1_2048"
    RSA_SIGN_RAW_PKCS1_3072 = "RSA_SIGN_RAW_PKCS1_3072"
    RSA_SIGN_RAW_PKCS1_4096 = "RSA_SIGN_RAW_PKCS1_4096"
    RSA_DECRYPT_OAEP_2048_SHA256 = "RSA_DECRYPT_OAEP_2048_SHA256"
    RSA_DECRYPT_OAEP_3072_SHA256 = "RSA_DECRYPT_OAEP_3072_SHA256"
    RSA_DECRYPT_OAEP_4096_SHA256 = "RSA_DECRYPT_OAEP_4096_SHA256"
    RSA_DECRYPT_OAEP_4096_SHA512 = "RSA_DECRYPT_OAEP_4096_SHA512"
    RSA_DECRYPT_OAEP_2048_SHA1 = "RSA_DECRYPT_OAEP_2048_SHA1"
    RSA_DECRYPT_OAEP_3072_SHA1 = "RSA_DECRYPT_OAEP_3072_SHA1"
    RSA_DECRYPT_OAEP_4096_SHA1 = "RSA_DECRYPT_OAEP_4096_SHA1"
    EC_SIGN_P256_SHA256 = "EC_SIGN_P256_SHA256"
    EC_SIGN_P384_SHA384 = "EC_SIGN_P384_SHA384"
    EC_SIGN_SECP256_K1_SHA256 = "EC_SIGN_SECP256K1_SHA256"
    HMAC_SHA256 = "HMAC_SHA256"
    HMAC_SHA1 = "HMAC_SHA1"
    HMAC_SHA384 = "HMAC_SHA384"
    HMAC_SHA512 = "HMAC_SHA512"
    HMAC_SHA224 = "HMAC_SHA224"
    EXTERNAL_SYMMETRIC_ENCRYPTION = "EXTERNAL_SYMMETRIC_ENCRYPTION"

class PublicKeyProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class PublicKey:
    r"""PublicKey
    The public key for a given CryptoKeyVersion. Obtained via GetPublicKey.
    """
    
    algorithm: Optional[PublicKeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pem') }})
    pem_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCrc32c') }})
    protection_level: Optional[PublicKeyProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    
