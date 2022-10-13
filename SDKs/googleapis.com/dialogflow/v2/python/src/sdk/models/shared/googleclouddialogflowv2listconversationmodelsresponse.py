from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2conversationmodel


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListConversationModelsResponse:
    conversation_models: Optional[List[googleclouddialogflowv2conversationmodel.GoogleCloudDialogflowV2ConversationModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationModels' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
