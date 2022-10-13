from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import urldownloadsize


@dataclass_json
@dataclass
class DownloadSizeEvidence:
    top_url_download_size_breakdowns: Optional[List[urldownloadsize.URLDownloadSize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topUrlDownloadSizeBreakdowns' }})
    total_download_size_kb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalDownloadSizeKb' }})
    
