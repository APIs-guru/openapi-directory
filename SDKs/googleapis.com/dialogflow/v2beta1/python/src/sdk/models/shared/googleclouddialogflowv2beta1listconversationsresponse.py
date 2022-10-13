from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1conversation


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListConversationsResponse:
    conversations: Optional[List[googleclouddialogflowv2beta1conversation.GoogleCloudDialogflowV2beta1Conversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
