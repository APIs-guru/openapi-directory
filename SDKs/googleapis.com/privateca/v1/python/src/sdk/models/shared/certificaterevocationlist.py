from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import revokedcertificate

class CertificateRevocationListStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUPERSEDED = "SUPERSEDED"


@dataclass_json
@dataclass
class CertificateRevocationList:
    access_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessUrl' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pem_crl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCrl' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    revoked_certificates: Optional[List[revokedcertificate.RevokedCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revokedCertificates' }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceNumber' }})
    state: Optional[CertificateRevocationListStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
