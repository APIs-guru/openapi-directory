from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MembershipSpecCertificateManagementEnum(str, Enum):
    CERTIFICATE_MANAGEMENT_UNSPECIFIED = "CERTIFICATE_MANAGEMENT_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class MembershipSpec:
    certificate_management: Optional[MembershipSpecCertificateManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateManagement' }})
    
