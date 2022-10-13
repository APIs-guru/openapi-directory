from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificatedescription
from . import certificateconfig
from . import revocationdetails


@dataclass_json
@dataclass
class Certificate:
    certificate_description: Optional[certificatedescription.CertificateDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateDescription' }})
    config: Optional[certificateconfig.CertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pem_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCertificate' }})
    pem_certificate_chain: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCertificateChain' }})
    pem_csr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCsr' }})
    revocation_details: Optional[revocationdetails.RevocationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revocationDetails' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
