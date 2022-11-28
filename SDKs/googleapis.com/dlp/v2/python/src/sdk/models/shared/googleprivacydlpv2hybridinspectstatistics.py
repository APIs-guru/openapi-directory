from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridInspectStatistics:
    r"""GooglePrivacyDlpV2HybridInspectStatistics
    Statistics related to processing hybrid inspect requests.
    """
    
    aborted_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortedCount') }})
    pending_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingCount') }})
    processed_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processedCount') }})
    
