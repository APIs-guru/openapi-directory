from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateAuthorityConfig:
    r"""CertificateAuthorityConfig
    The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
    """
    
    certificate_authority_service_config: Optional[CertificateAuthorityServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthorityServiceConfig') }})
    
