from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SmartReplyMetrics:
    r"""GoogleCloudDialogflowV2SmartReplyMetrics
    The evaluation metrics for smart reply model.
    """
    
    allowlist_coverage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowlistCoverage') }})
    conversation_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationCount') }})
    top_n_metrics: Optional[List[GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topNMetrics') }})
    
