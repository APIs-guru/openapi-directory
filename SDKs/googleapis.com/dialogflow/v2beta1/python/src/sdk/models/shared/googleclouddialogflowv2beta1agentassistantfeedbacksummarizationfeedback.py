from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback:
    r"""GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback
    Feedback for conversation summarization.
    """
    
    start_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimestamp') }})
    submit_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitTimestamp') }})
    summary_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaryText') }})
    
