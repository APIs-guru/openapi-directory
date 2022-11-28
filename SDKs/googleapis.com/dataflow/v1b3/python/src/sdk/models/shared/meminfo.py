from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MemInfo:
    r"""MemInfo
    Information about the memory usage of a worker or a container within a worker.
    """
    
    current_limit_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentLimitBytes') }})
    current_ooms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentOoms') }})
    current_rss_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRssBytes') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    total_gb_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalGbMs') }})
    
