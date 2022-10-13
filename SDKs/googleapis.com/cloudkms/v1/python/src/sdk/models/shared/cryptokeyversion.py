from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import keyoperationattestation
from . import externalprotectionleveloptions

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
    EXTERNAL_SYMMETRIC_ENCRYPTION = "EXTERNAL_SYMMETRIC_ENCRYPTION"

class CryptoKeyVersionProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"

class CryptoKeyVersionStateEnum(str, Enum):
    CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
    PENDING_GENERATION = "PENDING_GENERATION"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DESTROYED = "DESTROYED"
    DESTROY_SCHEDULED = "DESTROY_SCHEDULED"
    PENDING_IMPORT = "PENDING_IMPORT"
    IMPORT_FAILED = "IMPORT_FAILED"


@dataclass_json
@dataclass
class CryptoKeyVersion:
    algorithm: Optional[CryptoKeyVersionAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    attestation: Optional[keyoperationattestation.KeyOperationAttestation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestation' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    destroy_event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destroyEventTime' }})
    destroy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destroyTime' }})
    external_protection_level_options: Optional[externalprotectionleveloptions.ExternalProtectionLevelOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalProtectionLevelOptions' }})
    generate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generateTime' }})
    import_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importFailureReason' }})
    import_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importJob' }})
    import_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection_level: Optional[CryptoKeyVersionProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectionLevel' }})
    reimport_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reimportEligible' }})
    state: Optional[CryptoKeyVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
