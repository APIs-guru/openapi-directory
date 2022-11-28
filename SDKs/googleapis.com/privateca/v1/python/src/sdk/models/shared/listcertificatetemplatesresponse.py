from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCertificateTemplatesResponse:
    r"""ListCertificateTemplatesResponse
    Response message for CertificateAuthorityService.ListCertificateTemplates.
    """
    
    certificate_templates: Optional[List[CertificateTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateTemplates') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
