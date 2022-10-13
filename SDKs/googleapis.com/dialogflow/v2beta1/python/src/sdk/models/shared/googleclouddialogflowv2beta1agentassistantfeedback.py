from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1agentassistantfeedbacksummarizationfeedback

class GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum(str, Enum):
    ANSWER_RELEVANCE_UNSPECIFIED = "ANSWER_RELEVANCE_UNSPECIFIED"
    IRRELEVANT = "IRRELEVANT"
    RELEVANT = "RELEVANT"

class GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum(str, Enum):
    DOCUMENT_CORRECTNESS_UNSPECIFIED = "DOCUMENT_CORRECTNESS_UNSPECIFIED"
    INCORRECT = "INCORRECT"
    CORRECT = "CORRECT"

class GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum(str, Enum):
    DOCUMENT_EFFICIENCY_UNSPECIFIED = "DOCUMENT_EFFICIENCY_UNSPECIFIED"
    INEFFICIENT = "INEFFICIENT"
    EFFICIENT = "EFFICIENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AgentAssistantFeedback:
    answer_relevance: Optional[GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerRelevance' }})
    document_correctness: Optional[GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentCorrectness' }})
    document_efficiency: Optional[GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentEfficiency' }})
    summarization_feedback: Optional[googleclouddialogflowv2beta1agentassistantfeedbacksummarizationfeedback.GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summarizationFeedback' }})
    
