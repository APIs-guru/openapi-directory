from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2conversationmodelevaluation


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest:
    conversation_model_evaluation: Optional[googleclouddialogflowv2conversationmodelevaluation.GoogleCloudDialogflowV2ConversationModelEvaluation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationModelEvaluation' }})
    
