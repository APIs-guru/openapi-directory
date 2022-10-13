from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridInspectStatistics:
    aborted_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortedCount' }})
    pending_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingCount' }})
    processed_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processedCount' }})
    
