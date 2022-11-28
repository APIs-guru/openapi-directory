from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum(str, Enum):
    ANSWER_RELEVANCE_UNSPECIFIED = "ANSWER_RELEVANCE_UNSPECIFIED"
    IRRELEVANT = "IRRELEVANT"
    RELEVANT = "RELEVANT"

class GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum(str, Enum):
    DOCUMENT_CORRECTNESS_UNSPECIFIED = "DOCUMENT_CORRECTNESS_UNSPECIFIED"
    INCORRECT = "INCORRECT"
    CORRECT = "CORRECT"

class GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum(str, Enum):
    DOCUMENT_EFFICIENCY_UNSPECIFIED = "DOCUMENT_EFFICIENCY_UNSPECIFIED"
    INEFFICIENT = "INEFFICIENT"
    EFFICIENT = "EFFICIENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AgentAssistantFeedback:
    r"""GoogleCloudDialogflowV2AgentAssistantFeedback
    Detail feedback of Agent Assist result.
    """
    
    answer_relevance: Optional[GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerRelevance') }})
    document_correctness: Optional[GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentCorrectness') }})
    document_efficiency: Optional[GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentEfficiency') }})
    
