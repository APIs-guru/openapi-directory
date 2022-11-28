from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleDeleteCertificateAuthorityRequest:
    r"""ScheduleDeleteCertificateAuthorityRequest
    Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.
    """
    
    ignore_active_certificates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreActiveCertificates') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
