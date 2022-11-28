from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ServiceAccountKey
    Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API.
    """
    
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    key_algorithm: Optional[ServiceAccountKeyKeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyAlgorithm') }})
    key_origin: Optional[ServiceAccountKeyKeyOriginEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyOrigin') }})
    key_type: Optional[ServiceAccountKeyKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_key_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyData') }})
    private_key_type: Optional[ServiceAccountKeyPrivateKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyType') }})
    public_key_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyData') }})
    valid_after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAfterTime') }})
    valid_before_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validBeforeTime') }})
    
