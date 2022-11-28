from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CertificateInfo:
    r"""CertificateInfo
    Describes an X509 certificate.
    """
    
    sha256_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256Fingerprint') }})
    
