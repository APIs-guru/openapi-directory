from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import certificateauthorityserviceconfig


@dataclass_json
@dataclass
class CertificateAuthorityConfig:
    certificate_authority_service_config: Optional[certificateauthorityserviceconfig.CertificateAuthorityServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAuthorityServiceConfig' }})
    
