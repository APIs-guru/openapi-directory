from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificaterevocationlist


@dataclass_json
@dataclass
class ListCertificateRevocationListsResponse:
    certificate_revocation_lists: Optional[List[certificaterevocationlist.CertificateRevocationList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateRevocationLists' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
