from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certificatedescription
from . import certificateconfig
from . import revocationdetails

class CertificateSubjectModeEnum(str, Enum):
    SUBJECT_REQUEST_MODE_UNSPECIFIED = "SUBJECT_REQUEST_MODE_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    REFLECTED_SPIFFE = "REFLECTED_SPIFFE"


@dataclass_json
@dataclass
class Certificate:
    certificate_description: Optional[certificatedescription.CertificateDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateDescription' }})
    certificate_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateTemplate' }})
    config: Optional[certificateconfig.CertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    issuer_certificate_authority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuerCertificateAuthority' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pem_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCertificate' }})
    pem_certificate_chain: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCertificateChain' }})
    pem_csr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCsr' }})
    revocation_details: Optional[revocationdetails.RevocationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revocationDetails' }})
    subject_mode: Optional[CertificateSubjectModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectMode' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
