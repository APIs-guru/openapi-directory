from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificateauthorityconfig

class CertificateIssuanceConfigKeyAlgorithmEnum(str, Enum):
    KEY_ALGORITHM_UNSPECIFIED = "KEY_ALGORITHM_UNSPECIFIED"
    RSA_2048 = "RSA_2048"
    ECDSA_P256 = "ECDSA_P256"


@dataclass_json
@dataclass
class CertificateIssuanceConfig:
    certificate_authority_config: Optional[certificateauthorityconfig.CertificateAuthorityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAuthorityConfig' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    key_algorithm: Optional[CertificateIssuanceConfigKeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyAlgorithm' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rotation_window_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotationWindowPercentage' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
