from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CryptoKeyPurposeEnum(str, Enum):
    CRYPTO_KEY_PURPOSE_UNSPECIFIED = "CRYPTO_KEY_PURPOSE_UNSPECIFIED"
    ENCRYPT_DECRYPT = "ENCRYPT_DECRYPT"
    ASYMMETRIC_SIGN = "ASYMMETRIC_SIGN"
    ASYMMETRIC_DECRYPT = "ASYMMETRIC_DECRYPT"
    MAC = "MAC"


@dataclass_json
@dataclass
class CryptoKey:
    r"""CryptoKey
    A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    crypto_key_backend: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyBackend') }})
    destroy_scheduled_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyScheduledDuration') }})
    import_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importOnly') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_rotation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRotationTime') }})
    primary: Optional[CryptoKeyVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    purpose: Optional[CryptoKeyPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    rotation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotationPeriod') }})
    version_template: Optional[CryptoKeyVersionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTemplate') }})
    

@dataclass_json
@dataclass
class CryptoKeyInput:
    r"""CryptoKeyInput
    A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
    """
    
    crypto_key_backend: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyBackend') }})
    destroy_scheduled_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyScheduledDuration') }})
    import_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importOnly') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    next_rotation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRotationTime') }})
    primary: Optional[CryptoKeyVersionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    purpose: Optional[CryptoKeyPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    rotation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotationPeriod') }})
    version_template: Optional[CryptoKeyVersionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTemplate') }})
    
