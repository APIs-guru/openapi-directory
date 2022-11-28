from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics:
    r"""GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics
    Evaluation metrics when retrieving `n` smart replies with the model.
    """
    
    n: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('n') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recall') }})
    
