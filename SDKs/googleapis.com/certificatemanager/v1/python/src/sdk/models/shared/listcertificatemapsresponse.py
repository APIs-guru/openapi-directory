from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificatemap


@dataclass_json
@dataclass
class ListCertificateMapsResponse:
    certificate_maps: Optional[List[certificatemap.CertificateMap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateMaps' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
