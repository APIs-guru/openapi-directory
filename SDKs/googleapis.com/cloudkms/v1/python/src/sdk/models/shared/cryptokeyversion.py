from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CryptoKeyVersionStateEnum(str, Enum):
    CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
    PENDING_GENERATION = "PENDING_GENERATION"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DESTROYED = "DESTROYED"
    DESTROY_SCHEDULED = "DESTROY_SCHEDULED"
    PENDING_IMPORT = "PENDING_IMPORT"
    IMPORT_FAILED = "IMPORT_FAILED"

class CryptoKeyVersionAlgorithmEnum(str, Enum):
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

class CryptoKeyVersionProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class CryptoKeyVersionInput:
    r"""CryptoKeyVersionInput
    A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
    """
    
    attestation: Optional[KeyOperationAttestationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    external_protection_level_options: Optional[ExternalProtectionLevelOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalProtectionLevelOptions') }})
    state: Optional[CryptoKeyVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class CryptoKeyVersion:
    r"""CryptoKeyVersion
    A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
    """
    
    algorithm: Optional[CryptoKeyVersionAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    attestation: Optional[KeyOperationAttestation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    destroy_event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyEventTime') }})
    destroy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyTime') }})
    external_protection_level_options: Optional[ExternalProtectionLevelOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalProtectionLevelOptions') }})
    generate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generateTime') }})
    import_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importFailureReason') }})
    import_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importJob') }})
    import_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection_level: Optional[CryptoKeyVersionProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    reimport_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reimportEligible') }})
    state: Optional[CryptoKeyVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
