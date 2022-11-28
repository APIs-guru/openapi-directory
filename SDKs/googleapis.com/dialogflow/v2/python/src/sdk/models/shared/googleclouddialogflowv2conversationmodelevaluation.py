from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationModelEvaluation:
    r"""GoogleCloudDialogflowV2ConversationModelEvaluation
    Represents evaluation result of a conversation model.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    evaluation_config: Optional[GoogleCloudDialogflowV2EvaluationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    smart_reply_metrics: Optional[GoogleCloudDialogflowV2SmartReplyMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReplyMetrics') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationModelEvaluationInput:
    r"""GoogleCloudDialogflowV2ConversationModelEvaluationInput
    Represents evaluation result of a conversation model.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    evaluation_config: Optional[GoogleCloudDialogflowV2EvaluationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    smart_reply_metrics: Optional[GoogleCloudDialogflowV2SmartReplyMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReplyMetrics') }})
    
