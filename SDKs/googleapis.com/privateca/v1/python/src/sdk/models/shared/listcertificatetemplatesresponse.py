from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificatetemplate


@dataclass_json
@dataclass
class ListCertificateTemplatesResponse:
    certificate_templates: Optional[List[certificatetemplate.CertificateTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateTemplates' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
