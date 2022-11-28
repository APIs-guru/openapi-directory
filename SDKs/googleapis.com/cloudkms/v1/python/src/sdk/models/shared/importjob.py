from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ImportJobImportMethodEnum(str, Enum):
    IMPORT_METHOD_UNSPECIFIED = "IMPORT_METHOD_UNSPECIFIED"
    RSA_OAEP_3072_SHA1_AES_256 = "RSA_OAEP_3072_SHA1_AES_256"
    RSA_OAEP_4096_SHA1_AES_256 = "RSA_OAEP_4096_SHA1_AES_256"
    RSA_OAEP_3072_SHA256_AES_256 = "RSA_OAEP_3072_SHA256_AES_256"
    RSA_OAEP_4096_SHA256_AES_256 = "RSA_OAEP_4096_SHA256_AES_256"
    RSA_OAEP_3072_SHA256 = "RSA_OAEP_3072_SHA256"
    RSA_OAEP_4096_SHA256 = "RSA_OAEP_4096_SHA256"

class ImportJobProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"

class ImportJobStateEnum(str, Enum):
    IMPORT_JOB_STATE_UNSPECIFIED = "IMPORT_JOB_STATE_UNSPECIFIED"
    PENDING_GENERATION = "PENDING_GENERATION"
    ACTIVE = "ACTIVE"
    EXPIRED = "EXPIRED"


@dataclass_json
@dataclass
class ImportJob:
    r"""ImportJob
    An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a \"wrapping key\", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
    """
    
    attestation: Optional[KeyOperationAttestation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    expire_event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireEventTime') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    generate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generateTime') }})
    import_method: Optional[ImportJobImportMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importMethod') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection_level: Optional[ImportJobProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    public_key: Optional[WrappingPublicKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    state: Optional[ImportJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class ImportJobInput:
    r"""ImportJobInput
    An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a \"wrapping key\", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
    """
    
    attestation: Optional[KeyOperationAttestationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    import_method: Optional[ImportJobImportMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importMethod') }})
    protection_level: Optional[ImportJobProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    public_key: Optional[WrappingPublicKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    
