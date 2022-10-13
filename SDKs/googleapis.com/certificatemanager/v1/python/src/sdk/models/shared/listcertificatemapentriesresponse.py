from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificatemapentry


@dataclass_json
@dataclass
class ListCertificateMapEntriesResponse:
    certificate_map_entries: Optional[List[certificatemapentry.CertificateMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateMapEntries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
