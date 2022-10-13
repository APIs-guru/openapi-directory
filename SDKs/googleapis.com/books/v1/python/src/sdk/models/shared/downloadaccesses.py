from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import downloadaccessrestriction


@dataclass_json
@dataclass
class DownloadAccesses:
    download_access_list: Optional[List[downloadaccessrestriction.DownloadAccessRestriction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadAccessList' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
