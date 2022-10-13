from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import concurrentaccessrestriction
from . import downloadaccessrestriction


@dataclass_json
@dataclass
class RequestAccessData:
    concurrent_access: Optional[concurrentaccessrestriction.ConcurrentAccessRestriction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentAccess' }})
    download_access: Optional[downloadaccessrestriction.DownloadAccessRestriction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadAccess' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
