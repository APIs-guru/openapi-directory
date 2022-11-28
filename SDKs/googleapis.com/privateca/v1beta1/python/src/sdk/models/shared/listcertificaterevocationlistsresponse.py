from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCertificateRevocationListsResponse:
    r"""ListCertificateRevocationListsResponse
    Response message for CertificateAuthorityService.ListCertificateRevocationLists.
    """
    
    certificate_revocation_lists: Optional[List[CertificateRevocationList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateRevocationLists') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
