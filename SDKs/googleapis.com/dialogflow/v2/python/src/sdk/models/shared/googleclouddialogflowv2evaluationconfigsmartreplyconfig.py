from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig:
    r"""GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig
    Smart reply specific configuration for evaluation job.
    """
    
    allowlist_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowlistDocument') }})
    max_result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResultCount') }})
    
