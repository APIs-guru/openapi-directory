from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import keyoperationattestation
from . import wrappingpublickey

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
    attestation: Optional[keyoperationattestation.KeyOperationAttestation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestation' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    expire_event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireEventTime' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    generate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generateTime' }})
    import_method: Optional[ImportJobImportMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importMethod' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection_level: Optional[ImportJobProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectionLevel' }})
    public_key: Optional[wrappingpublickey.WrappingPublicKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    state: Optional[ImportJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
