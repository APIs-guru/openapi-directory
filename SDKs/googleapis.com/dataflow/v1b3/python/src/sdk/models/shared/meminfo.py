from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MemInfo:
    current_limit_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentLimitBytes' }})
    current_ooms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentOoms' }})
    current_rss_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentRssBytes' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    total_gb_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalGbMs' }})
    
