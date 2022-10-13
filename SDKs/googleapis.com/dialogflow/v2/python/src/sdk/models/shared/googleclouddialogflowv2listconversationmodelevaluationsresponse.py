from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2conversationmodelevaluation


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse:
    conversation_model_evaluations: Optional[List[googleclouddialogflowv2conversationmodelevaluation.GoogleCloudDialogflowV2ConversationModelEvaluation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationModelEvaluations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
