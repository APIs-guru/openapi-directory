from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1conversation


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListConversationsResponse:
    conversations: Optional[List[googlecloudcontactcenterinsightsv1conversation.GoogleCloudContactcenterinsightsV1Conversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
