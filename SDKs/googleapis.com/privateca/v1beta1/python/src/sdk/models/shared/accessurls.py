from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessUrls:
    r"""AccessUrls
    URLs where a CertificateAuthority will publish content.
    """
    
    ca_certificate_access_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateAccessUrl') }})
    crl_access_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crlAccessUrl') }})
    
