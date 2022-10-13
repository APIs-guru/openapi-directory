from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class URLDownloadSize:
    download_size_kb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadSizeKb' }})
    normalized_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedUrl' }})
    
