from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCertificateAuthoritiesResponse:
    r"""ListCertificateAuthoritiesResponse
    Response message for CertificateAuthorityService.ListCertificateAuthorities.
    """
    
    certificate_authorities: Optional[List[CertificateAuthority]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthorities') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
