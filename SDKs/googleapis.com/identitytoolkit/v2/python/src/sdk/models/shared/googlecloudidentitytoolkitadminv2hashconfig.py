from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudIdentitytoolkitAdminV2HashConfigAlgorithmEnum(str, Enum):
    HASH_ALGORITHM_UNSPECIFIED = "HASH_ALGORITHM_UNSPECIFIED"
    HMAC_SHA256 = "HMAC_SHA256"
    HMAC_SHA1 = "HMAC_SHA1"
    HMAC_MD5 = "HMAC_MD5"
    SCRYPT = "SCRYPT"
    PBKDF_SHA1 = "PBKDF_SHA1"
    MD5 = "MD5"
    HMAC_SHA512 = "HMAC_SHA512"
    SHA1 = "SHA1"
    BCRYPT = "BCRYPT"
    PBKDF2_SHA256 = "PBKDF2_SHA256"
    SHA256 = "SHA256"
    SHA512 = "SHA512"
    STANDARD_SCRYPT = "STANDARD_SCRYPT"


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2HashConfig:
    algorithm: Optional[GoogleCloudIdentitytoolkitAdminV2HashConfigAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    memory_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryCost' }})
    rounds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rounds' }})
    salt_separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saltSeparator' }})
    signer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signerKey' }})
    
