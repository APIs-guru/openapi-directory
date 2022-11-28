from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkloadCertificates:
    r"""WorkloadCertificates
    Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
    """
    
    enable_certificates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableCertificates') }})
    
