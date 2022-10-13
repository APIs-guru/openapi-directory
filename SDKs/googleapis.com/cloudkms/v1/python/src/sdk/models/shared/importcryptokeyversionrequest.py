from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ImportCryptoKeyVersionRequestAlgorithmEnum(str, Enum):
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
    EXTERNAL_SYMMETRIC_ENCRYPTION = "EXTERNAL_SYMMETRIC_ENCRYPTION"


@dataclass_json
@dataclass
class ImportCryptoKeyVersionRequest:
    algorithm: Optional[ImportCryptoKeyVersionRequestAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    crypto_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKeyVersion' }})
    import_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importJob' }})
    rsa_aes_wrapped_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rsaAesWrappedKey' }})
    wrapped_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wrappedKey' }})
    
