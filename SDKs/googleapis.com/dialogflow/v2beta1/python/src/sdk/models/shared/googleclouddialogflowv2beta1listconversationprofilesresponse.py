from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1conversationprofile


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListConversationProfilesResponse:
    conversation_profiles: Optional[List[googleclouddialogflowv2beta1conversationprofile.GoogleCloudDialogflowV2beta1ConversationProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationProfiles' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
