from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CertificateAuthorityStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    PENDING_ACTIVATION = "PENDING_ACTIVATION"
    PENDING_DELETION = "PENDING_DELETION"

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
    r"""CertificateAuthority
    A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
    """
    
    access_urls: Optional[AccessUrls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessUrls') }})
    ca_certificate_descriptions: Optional[List[CertificateDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateDescriptions') }})
    certificate_policy: Optional[CertificateAuthorityPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePolicy') }})
    config: Optional[CertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsBucket') }})
    issuing_options: Optional[IssuingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuingOptions') }})
    key_spec: Optional[KeyVersionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pem_ca_certificates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCaCertificates') }})
    state: Optional[CertificateAuthorityStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    subordinate_config: Optional[SubordinateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subordinateConfig') }})
    tier: Optional[CertificateAuthorityTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    type: Optional[CertificateAuthorityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class CertificateAuthorityInput:
    r"""CertificateAuthorityInput
    A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
    """
    
    access_urls: Optional[AccessUrls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessUrls') }})
    certificate_policy: Optional[CertificateAuthorityPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePolicy') }})
    config: Optional[CertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsBucket') }})
    issuing_options: Optional[IssuingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuingOptions') }})
    key_spec: Optional[KeyVersionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    subordinate_config: Optional[SubordinateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subordinateConfig') }})
    tier: Optional[CertificateAuthorityTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    type: Optional[CertificateAuthorityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
