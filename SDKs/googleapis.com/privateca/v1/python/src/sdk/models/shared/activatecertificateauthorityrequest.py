from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import subordinateconfig


@dataclass_json
@dataclass
class ActivateCertificateAuthorityRequest:
    pem_ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCaCertificate' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    subordinate_config: Optional[subordinateconfig.SubordinateConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subordinateConfig' }})
    
