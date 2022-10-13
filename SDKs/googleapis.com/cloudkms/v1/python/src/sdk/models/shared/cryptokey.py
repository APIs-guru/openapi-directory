from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cryptokeyversion
from . import cryptokeyversiontemplate

class CryptoKeyPurposeEnum(str, Enum):
    CRYPTO_KEY_PURPOSE_UNSPECIFIED = "CRYPTO_KEY_PURPOSE_UNSPECIFIED"
    ENCRYPT_DECRYPT = "ENCRYPT_DECRYPT"
    ASYMMETRIC_SIGN = "ASYMMETRIC_SIGN"
    ASYMMETRIC_DECRYPT = "ASYMMETRIC_DECRYPT"
    MAC = "MAC"


@dataclass_json
@dataclass
class CryptoKey:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    crypto_key_backend: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKeyBackend' }})
    destroy_scheduled_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destroyScheduledDuration' }})
    import_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importOnly' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_rotation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRotationTime' }})
    primary: Optional[cryptokeyversion.CryptoKeyVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    purpose: Optional[CryptoKeyPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    rotation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotationPeriod' }})
    version_template: Optional[cryptokeyversiontemplate.CryptoKeyVersionTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionTemplate' }})
    
