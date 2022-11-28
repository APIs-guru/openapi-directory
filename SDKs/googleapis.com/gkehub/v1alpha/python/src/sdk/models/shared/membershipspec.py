from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MembershipSpecCertificateManagementEnum(str, Enum):
    CERTIFICATE_MANAGEMENT_UNSPECIFIED = "CERTIFICATE_MANAGEMENT_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class MembershipSpec:
    r"""MembershipSpec
    **Workload Certificate**: The membership-specific input for WorkloadCertificate feature.
    """
    
    certificate_management: Optional[MembershipSpecCertificateManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateManagement') }})
    
