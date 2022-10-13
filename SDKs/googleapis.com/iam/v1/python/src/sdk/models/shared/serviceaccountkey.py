from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ServiceAccountKeyKeyAlgorithmEnum(str, Enum):
    KEY_ALG_UNSPECIFIED = "KEY_ALG_UNSPECIFIED"
    KEY_ALG_RSA_1024 = "KEY_ALG_RSA_1024"
    KEY_ALG_RSA_2048 = "KEY_ALG_RSA_2048"

class ServiceAccountKeyKeyOriginEnum(str, Enum):
    ORIGIN_UNSPECIFIED = "ORIGIN_UNSPECIFIED"
    USER_PROVIDED = "USER_PROVIDED"
    GOOGLE_PROVIDED = "GOOGLE_PROVIDED"

class ServiceAccountKeyKeyTypeEnum(str, Enum):
    KEY_TYPE_UNSPECIFIED = "KEY_TYPE_UNSPECIFIED"
    USER_MANAGED = "USER_MANAGED"
    SYSTEM_MANAGED = "SYSTEM_MANAGED"

class ServiceAccountKeyPrivateKeyTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TYPE_PKCS12_FILE = "TYPE_PKCS12_FILE"
    TYPE_GOOGLE_CREDENTIALS_FILE = "TYPE_GOOGLE_CREDENTIALS_FILE"


@dataclass_json
@dataclass
class ServiceAccountKey:
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    key_algorithm: Optional[ServiceAccountKeyKeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyAlgorithm' }})
    key_origin: Optional[ServiceAccountKeyKeyOriginEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyOrigin' }})
    key_type: Optional[ServiceAccountKeyKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_key_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKeyData' }})
    private_key_type: Optional[ServiceAccountKeyPrivateKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKeyType' }})
    public_key_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyData' }})
    valid_after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validAfterTime' }})
    valid_before_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validBeforeTime' }})
    
