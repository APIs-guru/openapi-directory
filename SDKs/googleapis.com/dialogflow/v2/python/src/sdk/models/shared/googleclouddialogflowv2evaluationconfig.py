from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EvaluationConfig:
    r"""GoogleCloudDialogflowV2EvaluationConfig
    The configuration for model evaluation.
    """
    
    datasets: Optional[List[GoogleCloudDialogflowV2InputDataset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasets') }})
    smart_compose_config: Optional[GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartComposeConfig') }})
    smart_reply_config: Optional[GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReplyConfig') }})
    
