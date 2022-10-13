from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accessurls
from . import certificatedescription
from . import certificateconfig
from . import keyversionspec
from . import subordinateconfig

class CertificateAuthorityStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    STAGED = "STAGED"
    AWAITING_USER_ACTIVATION = "AWAITING_USER_ACTIVATION"
    DELETED = "DELETED"

class CertificateAuthorityTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    ENTERPRISE = "ENTERPRISE"
    DEVOPS = "DEVOPS"

class CertificateAuthorityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SELF_SIGNED = "SELF_SIGNED"
    SUBORDINATE = "SUBORDINATE"


@dataclass_json
@dataclass
class CertificateAuthority:
    access_urls: Optional[accessurls.AccessUrls] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessUrls' }})
    ca_certificate_descriptions: Optional[List[certificatedescription.CertificateDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificateDescriptions' }})
    config: Optional[certificateconfig.CertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsBucket' }})
    key_spec: Optional[keyversionspec.KeyVersionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keySpec' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pem_ca_certificates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCaCertificates' }})
    state: Optional[CertificateAuthorityStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    subordinate_config: Optional[subordinateconfig.SubordinateConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subordinateConfig' }})
    tier: Optional[CertificateAuthorityTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    type: Optional[CertificateAuthorityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
