from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2conversation


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListConversationsResponse:
    conversations: Optional[List[googleclouddialogflowv2conversation.GoogleCloudDialogflowV2Conversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
