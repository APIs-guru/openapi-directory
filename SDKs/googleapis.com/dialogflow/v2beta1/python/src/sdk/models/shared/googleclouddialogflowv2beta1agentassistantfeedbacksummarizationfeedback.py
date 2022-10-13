from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback:
    start_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimestamp' }})
    submit_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitTimestamp' }})
    summary_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaryText' }})
    
